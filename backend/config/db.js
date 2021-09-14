const mysql = require('mysql')

//Script used to create a new database.
// CREATE DATABASE gazelec;

//Script used to create a new table Users in a gazelec database.
//Create a table of users MySQL.
// CREATE TABLE IF NOT EXISTS `users` (
//     id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
//     email varchar(255) NOT NULL,
//     firstName varchar(255) NOT NULL,
//     lastName varchar(255) NOT NULL,
//     password int(8) NOT NULL
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// Create a connection to the database.
const connectDB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'gazelec',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})

//Open the MySQL connection.
connectDB.connect((error) => {
  if (error) throw error
  //Everything went well with no error.
  console.log('Successfully connected to the database.')
})

module.exports = connectDB
