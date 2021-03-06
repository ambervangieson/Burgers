const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // NOTE: Be sure to add your MySQL password here!
  password: process.env.db_password,
  database: 'burgers_db',
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;}