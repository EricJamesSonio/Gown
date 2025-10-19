// server/src/controllers/gown.controller.js
import * as gownService from '../services/gown.service.js';

// GET /api/gowns
export const getGowns = async (req, res, next) => {
  try {
    const gowns = await gownService.getAllGowns();
    res.json(gowns);
  } catch (err) {
    next(err);
  }
};

// GET /api/gowns/:id
export const getGown = async (req, res, next) => {
  try {
    const gown = await gownService.getGownById(req.params.id);
    if (!gown) return res.status(404).json({ message: 'Gown not found' });
    res.json(gown);
  } catch (err) {
    next(err);
  }
};

// POST /api/gowns
export const createGownController = async (req, res, next) => {
  try {
    const newGown = await gownService.createGown(req.body);
    res.status(201).json(newGown);
  } catch (err) {
    next(err);
  }
};

// PUT /api/gowns/:id
export const updateGownController = async (req, res, next) => {
  try {
    const updatedGown = await gownService.updateGown(req.params.id, req.body);
    res.json(updatedGown);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/gowns/:id
export const deleteGownController = async (req, res, next) => {
  try {
    const result = await gownService.deleteGown(req.params.id);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
