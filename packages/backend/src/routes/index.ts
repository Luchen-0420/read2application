import { Router } from 'express';
import { getBooks, getBookById, createBook, searchDouban, getDoubanBookDetail, reclassifyAllBooks } from '../controllers/bookController';
import { createMethodology, matchMethodologies, deleteMethodology } from '../controllers/methodologyController';
import { generatePlanInquiry, generatePlan, extractMethodology } from '../services/aiService';
import { getPlans, createPlan, deletePlan } from '../controllers/planController';

const router = Router();

// Books & Douban Proxy
router.get('/books', getBooks);
router.post('/books', createBook);
router.post('/books/reclassify', reclassifyAllBooks);
router.get('/books/douban', searchDouban);
router.get('/books/douban/detail', getDoubanBookDetail);
router.get('/books/:id', getBookById);

// Methodologies
router.post('/books/:bookId/methodologies', createMethodology);
router.delete('/methodology/:id', deleteMethodology);
router.get('/match', matchMethodologies);

// AI & Plans
router.post('/ai/extract', extractMethodology);
router.post('/plan/inquiry', generatePlanInquiry);
router.post('/plan/generate', generatePlan);

router.get('/plans', getPlans);
router.post('/plans', createPlan);
router.delete('/plans/:id', deletePlan);

export default router;
