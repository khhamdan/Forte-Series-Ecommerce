import express from 'express';
import {
  loginController,
  registerController,
  senduser,
} from '../controllers/authcontroller.js';

const router = express.Router();
router.post('/registerData', registerController);
router.post('/Login', loginController);
// Method Get User
router.get('/getuser', senduser);

export default router;
