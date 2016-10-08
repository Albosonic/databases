var models = require('../models');
var mysql = require('mysql');
var db = require('../db');
// console.log('connection*********', db.query);

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
    console.log('what up!!!');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      db.query('INSERT INTO messages (id, name, user) VALUES (1, "bill", 3)', function (err) {
        if (err) {
          throw err;
        }
      }); 
    }
  }
};

