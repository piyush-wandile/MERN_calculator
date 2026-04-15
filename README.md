# MERN Calculator

A complete client-server calculator application built to learn end-to-end full-stack development and deployment. 

## Live Demo

- **Frontend (Vercel):** [https://mern-calculator-lime.vercel.app/](https://mern-calculator-lime.vercel.app/)
- **Backend (Render):** [https://mern-calculator-i2fm.onrender.com/](https://mern-calculator-i2fm.onrender.com/)

## Tech Stack

This project is built using the **MERN** stack and utilizes both JavaScript and TypeScript:
- **Frontend:** React.js, TypeScript, HTML/CSS (Hosted on Vercel)
- **Backend:** Node.js, Express.js (Hosted on Render)
- **Database:** MongoDB (Standard for MERN architectures)

## Project Structure

The repository is organized into a monolithic structure with distinct client and server directories:

```text
MERN_calculator/
├── client/      # Frontend React/TypeScript application
├── server/      # Backend Node/Express API
├── .gitignore
└── README.md

## Local Development Setup

To run this project locally, [Node.js](https://nodejs.org/) must be installed on the machine.

### 1\. Clone the repository

```bash
git clone [https://github.com/piyush-wandile/MERN_calculator.git](https://github.com/piyush-wandile/MERN_calculator.git)
cd MERN_calculator
```

### 2\. Backend Setup

```bash
cd server
npm install
# Create a .env file here and add the environment variables (like MONGO_URI, PORT)
npm start
```

### 3\. Frontend Setup

Open a new terminal window/tab:

```bash
cd client
npm install
# Start the development server
npm run dev 
# or npm start depending on the configuration (e.g., Vite vs CRA)
```

## Learning Objectives

This project was built as a hands-on approach to mastering:

  - Structuring a full-stack MERN application.
  - Managing communication between a React client and a Node/Express API.
  - Handling modern JavaScript/TypeScript ecosystems.
  - Deploying frontend applications to Vercel.
  - Deploying backend services to Render.

-----
