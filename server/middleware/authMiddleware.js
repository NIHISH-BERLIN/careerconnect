const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Not authorized. Please login."
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      id: decoded.id,
      role: decoded.role
    };

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token."
    });
  }
};

const recruiterOnly = (req, res, next) => {
  if (req.user && req.user.role === "recruiter") {
    return next();
  }

  return res.status(403).json({
    message: "Access denied. Recruiters only."
  });
};

module.exports = { protect, recruiterOnly };