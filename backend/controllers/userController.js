const User = require('../models/userModel.js')

//Create and Save a new User.
exports.createUser = (req, res) => {
  //Validate request.
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
  //Create a User.
  const user = new User({
    email: req.body.email,
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    password: req.body.password,
  })

  //Register User in the database.
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.',
      })
    else res.send(data)
  })
}

//Get all Users from the database.
exports.getUsers = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Users.',
      })
    else res.send(data)
  })
}
