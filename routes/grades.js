const express = require('express');
const router = express.Router();

const gradesController = require('../controllers/items');

router.get('/getAllGrade2', gradesController.getAllGrade2);

router.get('/getSingleGrade/:id', gradesController.getSingleGrade);

router.post('/createGrade', gradesController.createGrade);

router.put('/updateGrade/:id', gradesController.updateGrade);

router.delete('/deleteGrade/:id', gradesController.deleteGrade);

module.exports = router;