import express from 'express';
import {
  chat,
  explainConcept,
  generateFlashcards,
  generateQuiz,
  generateSummary,
  getChatHistory,
} from '../controllers/aiController.js';
import protect from '../middleware/auth.js';

const router = express.Router();

router.use(protect);

//NY:
router.get('/ping', (req, res) => res.json({ ok: true }));

router.post('/generate-flashcards', generateFlashcards);
router.post('/generate-quiz', generateQuiz);
router.post('/generate-summary', generateSummary);
router.post('/chat', chat);
router.post('/explain-concept', explainConcept);
//router.post('/chat-history/:documentId', getChatHistory);
//NY:
router.get('/chat-history/:documentId', getChatHistory);

export default router;
