const { ObjectId } = require('mongodb');
const mongodb = require('../data/database');

// GET all items
const getAll = async (req, res) => {
  try {
    const db = mongodb.getDatabase();
    const items = await db.collection('items').find().toArray();
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ message: "Server error while fetching items." });
  }
};

// GET single item by ID
const getSingle = async (req, res) => {
  try {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid item ID format.' });
    }

    const db = mongodb.getDatabase();
    const item = await db.collection('items').findOne({ _id: new ObjectId (id) });

    if (!item) {
      return res.status(404).json({ message: 'Item not found.' });
    }

    res.status(200).json(item);
  } catch (error) {
    console.error("Error fetching item:", error);
    res.status(500).json({ message: "Server error while fetching item." });
  }
};

// CREATE a new item
const createItem = async (req, res) => {
  try {
    const item = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      gender: req.body.gender,
      email: req.body.email,
      major: req.body.major,
      enrollmentYear: req.body.enrollmentYear
    };

    const db = mongodb.getDatabase();
    const result = await db.collection('items').insertOne(item);

    if (result.acknowledged) {
      res.status(201).json({ message: 'Item created successfully', id: result.insertedId });
    } else {
      res.status(500).json({ message: 'Failed to create item.' });
    }
  } catch (error) {
    console.error("Error creating item:", error);
    res.status(500).json({ message: "Server error while creating item." });
  }
};

// UPDATE an item by ID
const updateItem = async (req, res) => {
  try {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid item id format.' });
    }

    const item = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      gender: req.body.gender,
      email: req.body.email,
      major: req.body.major,
      enrollmentYear: req.body.enrollmentYear
    };

    const db = mongodb.getDatabase();
    const result = await db.collection('items').updateOne({ _id: new ObjectId(id)}, {$set: item} );

    if (result.modifiedCount > 0) {
      return res.status(404).json({ message: 'Item updated successfully.'});
    } 
      res.status(200).json({ message: 'Item not found.' });
    
  } catch (error) {
    console.error("Error updating item:", error);
    res.status(500).json({ message: "Server error while updating item." });
  }
};

// DELETE an item by ID
const deleteItem = async (req, res) => {
  try {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid item id format.' });
    }

    const db = mongodb.getDatabase();
    const result = await db.collection('items').deleteOne({ _id: new ObjectId(id)});

    if (result.deletedCount > 0) {
      return res.status(200).json({message: 'Item deleted successfully.'});
    } 

      res.status(404).json({ message: 'Message not found.' });
    
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ message: "Server error while deleting item." });
  }
};
//new api

//GetAll grades
const getAllGrade2 = async (req, res) => {
 try {
  const db = mongodb.getDatabase();
  const grades = await db.collection('grades').find().toArray();
  res.status(200).json(grades);
    //res.status(200).json({message:'Enter here'});
  } catch (error) {
    console.error("Error fetching grades:", error);
    res.status(500).json({ message: "Server error while fetching grade." });
 }
};

// GET single item by ID
const getSingleGrade = async (req, res) => {
  try {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid grade ID format.' });
    }

    const db = mongodb.getDatabase();
    const grade = await db.collection('grades').findOne({ _id: new ObjectId (id) });

    if (!grade) {
      return res.status(404).json({ message: 'grades not found.' });
    }

    res.status(200).json(grade);
  } catch (error) {
    console.error("Error fetching grade:", error);
    res.status(500).json({ message: "Server error while fetching grade." });
  }
};

// CREATE a new item
const createGrade = async (req, res) => {
  try {
    const grade = {
      course: req.body.course,
      grade: req.body.grade,
      studentName: req.body.studentName,
    };

    const db = mongodb.getDatabase();
    const result = await db.collection('grades').insertOne(grade);

    if (result.acknowledged) {
      res.status(201).json({ message: 'grade created successfully', id: result.insertedId });
    } else {
      res.status(500).json({ message: 'Failed to create grade.' });
    }
  } catch (error) {
    console.error("Error creating grade:", error);
    res.status(500).json({ message: "Server error while creating grade." });
  }
};

// UPDATE an item by ID
const updateGrade = async (req, res) => {
  try {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid grade id format.' });
    }

    const grade = {
      course: req.body.course,
      grade: req.body.grade,
      studentName: req.body.studentName,
    };

    const db = mongodb.getDatabase();
    const result = await db.collection('grades').updateOne({ _id: new ObjectId(id)}, {$set: grade} );

    if (result.modifiedCount > 0) {
      return res.status(404).json({ message: 'grade updated successfully.'});
    } 
      res.status(200).json({ message: 'grade not found.' });
    
  } catch (error) {
    console.error("Error updating grade:", error);
    res.status(500).json({ message: "Server error while updating grade." });
  }
};

// DELETE an item by ID
const deleteGrade = async (req, res) => {
  try {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid grade id format.' });
    }

    const db = mongodb.getDatabase();
    const result = await db.collection('grades').deleteOne({ _id: new ObjectId(id)});

    if (result.deletedCount > 0) {
      return res.status(200).json({message: 'grade deleted successfully.'});
    } 

      res.status(404).json({ message: 'Message not found.' });
    
  } catch (error) {
    console.error("Error deleting grade:", error);
    res.status(500).json({ message: "Server error while deleting grade." });
  }
};



module.exports = {
  getAll,
  getSingle,
  createItem,
  updateItem,
  deleteItem,
  getAllGrade2,
  getSingleGrade, createGrade, updateGrade, deleteGrade
};
