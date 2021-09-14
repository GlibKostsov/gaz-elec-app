const express = require('express')
//No need to use for 2 routes.
//var router = require("express").Router();
const bodyParser = require('body-parser')

const users = require('./controllers/userController.js')
const app = express()

//body-parser middleware.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Could be moved to /routes folder.
//Create a new User.
app.post('/users', users.createUser)
//Get all Users.
app.get('/users', users.getUsers)

//Set PORT listening for requests
app.listen(3001, () => {
  console.log('Server is running on port 3001.')
})
