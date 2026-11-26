# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
# CareerConnect – MERN Stack Job Portal

CareerConnect is a web-based job portal that connects job seekers with recruiters. Candidates can explore job opportunities and apply for jobs, while recruiters can post job openings.

## Features

- User Registration and Login
- Candidate and Recruiter Roles
- Browse Available Jobs
- View Job Details
- Apply for Jobs with a Cover Letter
- Candidate Dashboard
- Recruiter Dashboard
- MongoDB Database Integration
- JWT Authentication

## Technologies Used

### Frontend
- React.js
- Vite
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

## Project Structure

```text
careerconnect/
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.jsx
├── package.json
└── README.md
```

## Installation

1. Clone the repository.

```bash
git clone https://github.com/NIHISH-BERLIN/careerconnect.git
```

2. Install frontend dependencies.

```bash
npm install
```

3. Install backend dependencies.

```bash
cd server
npm install
```

4. Create a `.env` file inside the server folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

5. Start the backend.

```bash
npm run dev
```

6. Start the frontend from the main project folder.

```bash
npm run dev
```

## Developer

**Nithish Berlin**

GitHub: https://github.com/NIHISH-BERLIN

---

*CareerConnect – Connecting Talent with Opportunities.*