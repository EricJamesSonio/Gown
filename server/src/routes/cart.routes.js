import express from 'express';
import { 
  addToCart, 
  getCartItems, 
  removeCartItem, 
  updateCartItem,
  clearCart
} from '../controllers/cart.controller.js';

const router = express.Router();

// Add or update cart item
router.post('/add', addToCart);

// Get all cart items for a user
router.get('/:user_id', getCartItems);

// Remove a cart item
router.delete('/:id', removeCartItem);

// Update quantity for a cart item
router.put('/:id', updateCartItem);

// Clear all cart items for a user
router.delete('/clear/:userId', clearCart);

export default router;
