import express from 'express';
import {
  loginController,
  registerController,
} from '../controllers/authcontroller.js';

const router = express.Router();
router.post('/registerData', registerController);
router.post('/Login', loginController);

export default router;
