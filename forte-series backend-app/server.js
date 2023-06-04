import express from 'express';
import dotenv from 'dotenv';
import color from 'colors';
import dbConnection from './config/db.js';
import authRoute from './routes/authRoute.js';
import morgan from 'morgan';
import cors from 'cors';

// rest object
const app = express();

// config dotenv
dotenv.config();

//Datbase connection called
dbConnection();
// this json should be before the line of route
app.use(cors());
app.use(express.json());
app.use('/api/v1/auth', authRoute);
app.use(morgan('dev'));

const PORT = process.env.PORT || 8080;

// app.get('/register', (req, res) => {
//   res.send('<h1>Register page called</h1>');
// });

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`.bgYellow.blue);
});
