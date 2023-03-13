import { RequestHandler } from 'express';

export const getPublishedMessages: RequestHandler = (req, res, next) => {
  try {
    console.log(req.body);
    console.log(req.url);
    return res.status(200).json({ message: 'Notification gotten' });
  } catch (error) {
    next(error);
  }
};
