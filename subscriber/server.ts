require('dotenv').config();
import bodyParser from 'body-parser';
import express, { NextFunction, Request, Response } from 'express';
import router from './routes';

const app = express();

express.urlencoded({ extended: false });
app.use(bodyParser.json());

app.use(router);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  const defaultMessage =
    "An error occurred, we're already looking into it. Please try again later";

  res.status(error.status || 500).json({
    message: error.status ? error.message : defaultMessage,
    data: error.data,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
