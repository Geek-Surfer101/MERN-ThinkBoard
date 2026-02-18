# MERN ThinkBoard

A full-stack note-taking application built with the MERN stack, designed for productivity and seamless user experience. ThinkBoard allows users to create, view, and manage notes efficiently, with robust authentication and rate-limiting for security and performance.

## 🚀 Features

- Create, view, and manage notes with a clean UI
- User authentication and authorization
- Rate limiting to prevent abuse
- Responsive and modern frontend with React and Tailwind CSS
- RESTful API with Express.js
- MongoDB for persistent data storage
- Error boundaries and graceful error handling
- Optimized for deployment (Vercel-ready)

## 🛠️ Technologies Used

### Frontend

- **React.js** (with Vite)
- **Tailwind CSS**
- **Axios** (for API requests)
- **ESLint** (for code quality)

### Backend

- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose ODM)
- **dotenv** (for environment variables)
- **CORS** (for cross-origin requests)
- **@clerk/clerk-sdk-node** (authentication)
- **@upstash/ratelimit** and **@upstash/redis** (rate limiting)

## 📁 Project Structure

- `frontend/` — React app (UI, pages, components, styles)
- `backend/` — Express server, API routes, controllers, models, middleware
- `api/` — Serverless API entry point (for Vercel deployment)
- `package.json` — Project scripts and dependencies

