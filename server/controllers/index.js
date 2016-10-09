var models = require('../models');
var mysql = require('mysql');
var db = require('../db');
var Promise = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      
      models.messages.get(req, res);
      return new Promise(function(resolve, reject) {
        db.query('SELECT * FROM messages', function(err, results) {
          if (err) {
            throw err;
          }
          resolve(results);
        });
      }).then(function(data) {
        console.log('**************', data.id);
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(req, res);
    },
    post: function (req, res) {
      models.users.post(req, res);
    }
  }
};

