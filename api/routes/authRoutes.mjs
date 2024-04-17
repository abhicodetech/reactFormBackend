import express from 'express';
import { handleSignup } from '../controllers/authControllers.mjs';

const authRoutes = express.Router();

authRoutes.use('/signup', handleSignup);

export default authRoutes;