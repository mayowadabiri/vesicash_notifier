import { RequestHandler } from 'express';
import { BadRequestError } from '../utils/error';
import axios from 'axios';
import database from '../db';

export const createSubscription: RequestHandler = async (req, res, next) => {
  try {
    if (!req.body.url) {
      throw new BadRequestError('Please, provide a url subscription');
    }
    const { topic } = req.params;
    const db = database.getDb();
    const subscriber = await db.collection('subscriber').findOne({
      url: req.body.url,
    });
    if (!subscriber) {
      await db.collection('subscriber').insertOne({
        url: req.body.url,
        topics: [topic],
      });
      return res.json({ message: 'Created successfully' });
    }
    if (!subscriber.topics.includes(req.params.topic)) {
      await db
        .collection('subscriber')
        .findOneAndUpdate(
          { _id: subscriber._id },
          { $set: { topics: [...subscriber.topics, topic] } }
        );
      return res.json({
        message: 'A new topic has been added to the topic list',
      });
    }
    throw new BadRequestError('Topic already exists');
  } catch (error) {
    next(error);
  }
};

export const publish: RequestHandler = async (req, res, next) => {
  try {
    const { topic } = req.params;
    const db = database.getDb();
    const response = await db
      .collection('subscriber')
      .find({
        topics: { $in: [req.params.topic] },
      })
      .toArray();
    const urls = response.map(({ url }: { url: string }) =>
      axios.post(url, {
        topic,
        data: req.body,
      })
    );
    await Promise.all(urls);
    console.log(response);
    return res.json({ message: 'Notification has been successfully sent.' });
  } catch (err) {
    next(err);
  }
};
