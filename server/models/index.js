var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (req, res) {
      res.statusCode = 200;
      console.log(req.body);
      db.query('INSERT INTO messages (username, messages, roomname) VALUES ("' + req.body.username + '", "' + req.body.messages + '", "' + req.body.messages + '")', function (err) {
        if (err) {
          throw err;
        }
      }); 
      res.statusCode = 200;
      res.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (req, res) {

      db.query('INSERT INTO user (username) VALUES ("' + req.body.username + '")', function (err) {
        if (err) {
          throw err;
        }
      }); 
      res.end();
    }
  }
};

