// Set up MySQL connection.
const mysql = require('mysql');

// Connection To Database Connection
const connection = mysql.createConnection(require('./db-config'));

// Back Up Conection Configuration To Database
// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "random04",
//   database: "burgers_db"
// });

// Error Out If Connection Is Not Made.
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;