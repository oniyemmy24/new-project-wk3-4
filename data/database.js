require('dotenv').config();
const { MongoClient } = require('mongodb');

let database;

const initDb = async (callback) => {
  if (database) {
    console.log('DB is already initialized!');
    return callback(null, database);
  }

  try {
    const client = new MongoClient(process.env.MONGODB_URL);
    database = client.db(process.env.project3); // Ensure you have DB_NAME in your .env
    console.log('MongoDB connected successfully.');
    callback(null, database);
  } 
    catch (err) {
    console.error('MongoDB connection error:', err);
    callback(err);
  }
};

const getDatabase = () => {
  if (!database) {
    throw Error('DB not initialized');
  }
  return database;
};

module.exports = {
  initDb,
  getDatabase
};
