# Flash-Card — AI Learning Assistant (MERN + Gemini)

A full-stack learning assistant that turns PDFs into interactive study material: **AI chat**, **summaries**, **concept explanations**, **auto-generated flashcards**, and **quizzes with results analytics** — wrapped in a clean, responsive UI.

Built as a portfolio project to demonstrate end-to-end product development: authentication, file handling, API design, database modeling, AI integration, and a production-style frontend.

---

## Key Features

### Documents

- Upload and manage PDF study documents (metadata + file size tracking)
- Embedded in-app PDF viewer

### AI Study Tools (Google Gemini)

- Context-aware chat about document content
- One-click document summaries
- Topic/concept explainer based on the document

### Flashcards

- Auto-generated flashcard sets from document content
- Review tracking (last reviewed + review count)
- Star/favorite system for important cards
- Flip-card UX + dedicated flashcards page

### Quizzes

- Generate multiple-choice quizzes with configurable number of questions
- Take quizzes with progress UI and navigation
- Detailed results view (score breakdown, correct answers, explanations)

### Dashboard

- Progress overview (documents, flashcards, quizzes)
- Recent activity & learning stats

### Auth + Profile

- JWT-based authentication (register/login)
- Protected routes
- Profile management

---

## Tech Stack

**Frontend**

- React + React Router
- Tailwind CSS
- Axios
- React Hot Toast
- Lucide Icons

**Backend**

- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Multer (file uploads)
- Google Gemini API integration

---

## Project Structure (high level)

Flash-Card/
backend/ # Express API, MongoDB models, auth, AI endpoints
frontend/ # React app, UI components, pages, services

---

## Getting Started (Local)

### 1) Clone and install

```bash
git clone <your-repo-url>
cd Flash-Card

cd backend && npm install
cd ../frontend && npm install
```

### 2) Environment variables

Create backend/.env:
NODE_ENV=development
PORT=8000

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_google_gemini_api_key

Notes:

- MONGO_URI should point to a MongoDB Atlas cluster or local MongoDB instance.
- JWT_SECRET should be long and random.

### 3) Run the app

In two terminals:
Terminal 1:
cd backend
npm run dev

Terminal 2:
cd frontend
npm run dev

Frontend typically runs on http://localhost:5173 and backend on http://localhost:8000.

⸻

## API Overview (selected)

- POST /api/auth/register — register
- POST /api/auth/login — login
- GET /api/documents — list documents
- POST /api/documents/upload — upload pdf
- GET /api/flashcards/:documentId — flashcards for doc
- GET /api/quizzes/:documentId — quizzes for doc
- GET /api/quizzes/quiz/:id — quiz by id
- POST /api/quizzes/:id/submit — submit quiz
- GET /api/quizzes/:id/results — quiz results
- POST /api/ai/chat — ask questions about doc
- POST /api/ai/summary — generate summary
- POST /api/ai/explain — explain concept
- POST /api/ai/flashcards — generate flashcards
- POST /api/ai/quiz — generate quiz

(Exact endpoints may vary slightly depending on your route files.)

⸻

## Security Notes

- JWT tokens are required for protected routes.
- Requests are scoped to userId on the backend to prevent cross-user access.
- Recommended for production: rate limiting, input validation, stricter CORS config, and secure cookie/token storage strategy.

⸻

## What This Project Demonstrates

- Full-stack MERN development with real product features
- Database modeling (documents, quizzes, flashcards, user progress)
- REST API design + protected endpoints
- File upload pipeline + PDF-based workflows
- AI feature integration with structured prompts and UI flows
- Responsive UI and component-based frontend architecture

⸻

## Potential Improvements

- Search + tagging for documents and flashcards
- Spaced repetition scheduling (SM-2 / Leitner)
- Test suite (unit + integration, API + UI)
- Background jobs for heavy AI generation and retry logic
- Better analytics (streaks, weak topics, time spent)

⸻

## Acknowledgements

Inspired by the general idea of an “AI learning assistant” workflow.
Original inspiration: https://www.youtube.com/watch?v=iaAdWmAu0TE
