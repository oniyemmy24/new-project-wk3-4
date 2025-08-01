const express = require('express');
const router = express.Router();

const itemsController = require('../controllers/items');

router.get('/', itemsController.getAll);

router.get('/:id', itemsController.getSingle);

router.post('/', itemsController.createItem);

router.put('/:id', itemsController.updateItem);

router.delete('/:id', itemsController.deleteItem);

module.exports = router;