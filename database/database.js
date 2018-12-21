var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'airbnb'
});

connection.connect();

const getReviewsByRoomId = (roomid, callback) => {
  var queryStr = `SELECT * FROM reviews WHERE room_id=${roomid}`;

  // select u.firstName, u.lastName, r.review_text from users u, reviews r where r.room_id=2 AND r.reviewer_id=u.id;

  connection.query(queryStr, (err, results) => {
    if(err) {
      console.log(err);
      // callback(err)
    } else {
      console.log(results);
      // callback(null, results);
    }
  })
}

const getReviewsByRoomIdAndQueryTerm = (roomid, queryTerm, callback) => {

}

const getAverageStarsByRoomId = (roomid, callback) => {
  var queryStr = `SELECT AVG(stars_accuracy), AVG(stars_communication), 
    AVG(stars_location), AVG(stars_checkin), AVG(stars_cleanliness), 
    AVG(stars_value) FROM reviews WHERE room_id=${roomid}`;

  connection.query(queryStr, (err, results) => {
    if(err) {
      console.log(err);
      // callback(err)
    } else {
      console.log(results);
      // callback(null, results);
    }
  })
}

// connection.end();

module.exports = connection;

