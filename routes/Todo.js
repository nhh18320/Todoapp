const express = require('express');
const router = express.Router();

const { getAllTodos, createTodo, getTodoById, getTodo, updateTodo, deleteTodo} = require('../controllers/todo');

router.get("/todos/", getAllTodos);

router.post("/todo/create", createTodo);

router.param("todoId", getTodoById);

router.get("/todos/:todoId", getTodo);

router.put("/todos/:todoId/update", updateTodo);

router.delete("/todos/:todoId/delete", deleteTodo);

module.exports = router;