// backend/routes/userRoutes.js
import express from 'express';
import { registerUser, authUser } from '../controllers/userController.js';

const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Authenticate a user
router.post('/login', authUser);

export default router;