import express from 'express';
import { BaseError } from '../utils/base_error';

const router = express.Router();

// Default route
router.get('/', async (req, res, next) => {
  try {
    const error = new BaseError('MyError', 401, true, "An error message")
    throw error;
    res.send('Hello from expressjs')
  } catch (e) {
    next(e);
  }
});

export default router;
