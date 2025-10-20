// server/src/services/gown.service.js
import { GownModel } from '../models/gown.model.js';

export const getAllGowns = async () => {
  return await GownModel.findAll();
};

export const getGownById = async (id) => {
  return await GownModel.findById(id);
};

export const createGown = async (data) => {
  // (Optional) you can add validation or defaults here later
  return await GownModel.create(data);
};

export const updateGown = async (id, data) => {
  return await GownModel.update(id, data);
};

export const deleteGown = async (id) => {
  return await GownModel.delete(id);
};
