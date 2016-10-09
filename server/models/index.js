var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      // console.log('!!!*********', req.body);
      db.query('SELECT * FROM messages', function(err, results) {
        if (err) {
          throw err;
        }
        console.log(results);
      });
        res.end();
    }, // a function which produces all the messages
    post: function (req, res) {
      // var myStr = 'INSERT INTO messages (username, message, roomname) VALUES ("' + req.body.username + '",  "' + req.body.message + '", "' + req.body.roomname + '")';
      // console.log('MYSTR: ' + myStr);
      db.query('INSERT INTO messages (username, message, roomname) VALUES ("' + req.body.username + '",  "' + req.body.message + '", "' + req.body.roomname + '")', function (err) {
        if (err) {
          throw err;
        } 
      }); 
      res.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      console.log('*********', req.body);
      db.query('SELECT * FROM user', function(err, results) {
      });
      res.end();
    },
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

