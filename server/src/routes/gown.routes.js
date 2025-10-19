// server/src/routes/gown.routes.js
import express from 'express';
import {
  getGowns,
  getGown,
  createGownController,
  updateGownController,
  deleteGownController
} from '../controllers/gown.controller.js';

const router = express.Router();

// /api/gowns
router.get('/', getGowns);
router.get('/:id', getGown);
router.post('/', createGownController);
router.put('/:id', updateGownController);
router.delete('/:id', deleteGownController);

export default router;
