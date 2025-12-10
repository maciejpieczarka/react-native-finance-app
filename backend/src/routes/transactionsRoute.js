import express from 'express';
import {
  createTransaction,
  deleteTransaction,
  getSUmmaryByUserId,
  getTransactionsByUserId
} from '../controllers/transactionsController.js';

const transactionsRouter = express.Router();

//Get user's transactions
transactionsRouter.get('/:userId', getTransactionsByUserId);
//Add transaction for specific user
transactionsRouter.post('/', createTransaction);
//Delete transaction
transactionsRouter.delete('/:transactionId', deleteTransaction);
//getting the summary of expenses
transactionsRouter.get('/summary/:userId', getSUmmaryByUserId);

export default transactionsRouter;
