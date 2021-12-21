const express = require("../models/Todo");

exports.createTodo = (req, res) => {
    const todo = new Todo(req.body);

    Todo.save((err, task) =>{
        if(err || !task) {
            return res.status(400).json({ error: "something went wrong" });
        }
        res.json({task});
    });
};

exports.getAllTodos = (req, res) => {
    Todo.find().sort("createdAt").exec((err, todos)=>{
        if(err|| !todos){
            return res.status(400).json({ error: "404 todo not found" });
        }

        req.todo = todo;
        next();
    });
};

exports.getTodoById = (req, res, next, todoId) => {
    Todo.findById(todoId).exec((err, todo)=>{
        if(err|| !todos){
            return res.status(400).json({ error: "something went wrong in finding all todos" });
        }
        res.json(todos);
    });
};

exports.getTodo = (req, res ) => {
    return res.json(req.todo);
};

exports.updateTodo = (req, res) => {
    const todo = req.todo;

    todo.task =req.body.task;

    todo.save((err, task) =>{
        if(err || !task) {
            return res.status(400).json({ error: "something went wrong while updating" });
        }
        res.json({ task });
    });
};

exports.deleteTodo = (req, res) => {
    const todo = req.todo;


    todo.remove((err, task) =>{
        if(err || !task) {
            return res.status(400).json({ error: "something went wrong while deleting the todo" });
        }
        res.json({ 
            task_delete: task,
            message: "Todo deleted successfully!" 
         });
    });
};