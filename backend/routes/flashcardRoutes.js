import express from 'express';
import {
  deleteFlashcardSet,
  getAllFlashcardSets,
  getFlashcards,
  reviewFlashcard,
  toggleStarFlashcard,
} from '../controllers/flashcardController.js';
import protect from '../middleware/auth.js';

console.log('flashcardRoutes loaded');

const router = express.Router();

router.use(protect);

router.get('/', getAllFlashcardSets);

router.put('/:cardId/review', reviewFlashcard);
router.put('/:cardId/star', toggleStarFlashcard);

router.delete('/:id', deleteFlashcardSet);

router.get('/:documentId', getFlashcards);

export default router;
