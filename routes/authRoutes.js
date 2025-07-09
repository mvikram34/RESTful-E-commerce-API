import express from 'express';
import { register, login } from '../controllers/authController.js';

const router = express.Router();

// Register and Login APIs
router.post('/register', register);   // POST /api/auth/register
router.post('/login', login);         // POST /api/auth/login

// Test route
router.get('/test', (req, res) => {
  res.send('Auth route working!');
});

export default router;

