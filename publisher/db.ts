require('dotenv').config();
import { MongoClient } from 'mongodb';
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL!, {});

let dbConnection: any;
console.log(process.env.MONGO_URL);

const database = {
  connectToServer: async function (callback: any) {
    try {
      const response = await client.connect();
      dbConnection = response.db();
      return callback();
    } catch (err) {
      console.log(err);
    }
  },

  getDb: function () {
    return dbConnection;
  },
};

export default database;
