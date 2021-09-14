const db = require('../config/db.js')

//User constructor.
const User = function (user) {
  this.email = user.email
  this.lastName = user.lastName
  this.firstName = user.firstName
  this.password = user.password
}

//Create a new User in database.
User.create = (newUser, result) => {
  db.query('INSERT INTO users SET ?', newUser, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(err, null)
      return
    }

    console.log('Created user: ', { id: res.insertId, ...newUser })
    result(null, { id: res.insertId, ...newUser })
  })
}

//Get all Users from database.
User.getAll = (result) => {
  db.query('SELECT * FROM users', (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }

    console.log('Users: ', res)
    result(null, res)
  })
}

module.exports = User
