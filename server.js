const express = require('express') 
const app = express();

//Import routes
const todosRoute = require('./src/routes/toDos')

//Middleware packages
app.use(express.json());

//Route Middlewares
app.use('/api/todos', todosRoute)

// DB 
const { DB_URI } = require("./src/config/config");
const mongoose = require("mongoose");
mongoose.connect(DB_URI,{useNewUrlParser: true, useCreateIndex: true,
    useFindAndModify: false,useUnifiedTopology: true})

app.listen(5000,() => console.log('Server started on 5000'))


