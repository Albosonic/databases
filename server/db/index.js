var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect(function(err) {
  // connected! (unless `err` is set)
  if (err) {
    throw err;
  }
  console.log('MySQL Conected!!!!!!!!!!!');
});
module.exports = connection;


