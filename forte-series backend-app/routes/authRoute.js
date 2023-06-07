import express from 'express';
import {
  loginController,
  registerController,
  senduser,
} from '../controllers/authcontroller.js';

const router = express.Router();
// post register
router.post('/registerData', registerController);
// post login
router.post('/Login', loginController);
// Method Get User data
router.get('/getuser', senduser);

export default router;
