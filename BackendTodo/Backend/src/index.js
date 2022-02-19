const express=require('express');
const cors = require('cors')
const app=express();
app.use(express.json());

const todoController=require('./controllers/todo.controller');


app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
)

app.use('/todo',todoController);
module.exports =app;