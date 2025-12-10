import express from 'express';
import dotenv from 'dotenv';
import { initDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';
import transactionsRouter from './routes/transactionsRoute.js';

dotenv.config();

const app = express();

//middleware
app.use(rateLimiter);
app.use(express.json());
app.use('/api/transactions', transactionsRouter);

const PORT = process.env.PORT || 5001;

initDB().then(() => {
  app.listen(PORT, () => {
    console.log('Server is up and running on PORT:', PORT + '...');
  });
});
