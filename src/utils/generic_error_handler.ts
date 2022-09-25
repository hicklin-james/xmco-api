import { Request, Response, NextFunction } from 'express';

export const handleError = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(err.statusCode || 500).send(err.message);
}
