const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const ToDo = require('../model/toDos');


// @desc GET all todos
// @route GET /api/todos
// @acces Public
exports.getTodos = asyncHandler (async (req, res, next) => {

    const todos = await ToDo.find()
    console.log(todos)
    res.status(200).json(res.advancedResults)
});

// @desc Create todo
// @route POST /api/todos
// @acces Public

exports.addTodos = asyncHandler(async (req, res, next) => {
    const {content,date,collection,done} = req.body
    
    const todo = await ToDo.create({content,date,collection,done});
     res.status(201).json({sucess:true,data:todo})
    });

// @desc Update parking reservation
// @route PUT /api/todos/:id
// @acces Public

exports.updateTodos = asyncHandler(async (req, res, next) => {

let todo = await ToDo.findById(req.params.id)
  
if(!todo){
    return next(new ErrorResponse(`No todo with id of ${req.params.id}`,404))
}
todo = await ToDo.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
    runValidators:true
  })
res.status(201).json({sucess:true,data:todo})
  
});

// @desc Delete todos 
// @route Delete /api/todos/:id
// @acces Public

exports.deleteTodos = asyncHandler(async (req, res, next) => {
  
const todos = await ToDo.findById(req.params.id)
  
if(!todos){
    return next(new ErrorResponse(`No todo with id of ${req.params.id}`,404))
}
  
await todos.remove()
     
res.status(201).json({sucess:true,data:{}})
  
});