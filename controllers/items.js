const { ObjectId } = require('mongodb');
const db = require('../data/database');

const getAllItems = async (req, res) => {
  try {
    const items = await db.getDatabase().collection('items').find().toArray();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching items' });
  }
};

const getSingleItem = async (req, res) => {
  try {
    const itemId = new ObjectId(req.params.id);
    const item = await db.getDatabase().collection('items').findOne({ _id: itemId });
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching item' });
  }
};

const createItem = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) return res.status(400).json({ error: 'Missing fields' });

    const result = await db.getDatabase().collection('items').insertOne({ name, description });
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Error creating item' });
  }
};

const updateItem = async (req, res) => {
  try {
    const itemId = new ObjectId(req.params.id);
    const { name, description } = req.body;
    if (!name || !description) return res.status(400).json({ error: 'Missing fields' });

    const result = await db.getDatabase().collection('items').replaceOne(
      { _id: itemId },
      { name, description }
    );
    res.status(result.modifiedCount > 0 ? 204 : 404).send();
  } catch (err) {
    res.status(500).json({ error: 'Error updating item' });
  }
};

const deleteItem = async (req, res) => {
  try {
    const itemId = new ObjectId(req.params.id);
    const result = await db.getDatabase().collection('items').deleteOne({ _id: itemId });
    res.status(result.deletedCount > 0 ? 204 : 404).send();
  } catch (err) {
    res.status(500).json({ error: 'Error deleting item' });
  }
};

module.exports = { getAllItems, getSingleItem, createItem, updateItem, deleteItem };
