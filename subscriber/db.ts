import mongoose from 'mongoose';
import config from './config/config';

mongoose.set('strictQuery', false);
const db = mongoose.connect(config.mongo_url, {
  socketTimeoutMS: 45000,
  keepAlive: true,
});

export default db;
