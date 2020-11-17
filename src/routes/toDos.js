const express = require('express');
const ToDo = require('../model/toDos');

const {
    getTodos,
    addTodos,
    updateTodos,
    deleteTodos
} = require('../controllers/toDos');

const router = express.Router();
const advancedResults = require('../middleware/advancedResults');

router
  .route('/').get(advancedResults(ToDo),getTodos)
  .post(addTodos)

router
.route('/:id')
.put(updateTodos)
.delete(deleteTodos)

module.exports = router;
