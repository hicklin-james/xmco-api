import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose'
import routes from './src/routes/routes';
import config from 'config';
import { handleError } from './src/utils/generic_error_handler';
import connectDB from './src/utils/connections/connect_db';

const app: Express = express();
const port = config.get<number>('port');

app.use('/', routes);

app.use(handleError);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  connectDB();
});
