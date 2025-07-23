const { MongoClient } = require('mongodb');
require('dotenv').config();

let database;

const initDb = async () => {
  if (database) return;
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    database = client.db(); // uses db in URI
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getDatabase = () => {
  if (!database) throw Error('Database not initialized');
  return database;
};

module.exports = { initDb, getDatabase };
