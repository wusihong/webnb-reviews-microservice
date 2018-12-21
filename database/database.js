var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'airbnb'
});

connection.connect();

const getReviewsByRoomId = (roomid, callback) => {
  var queryStr = `SELECT users.first_name, reviews.room_id, reviews.review_date, 
  reviews.review_text, reviews.review_is_english, reviews.review_text_eng, 
  reviews.has_host_response, reviews.host_reply_text 
  FROM reviews INNER JOIN users ON reviews.reviewer_id = users.id
  WHERE reviews.room_id=${roomid};`

  // Alternative query style 
  // var queryStr = `SELECT u.first_name, r.room_id, r.review_date, 
  // r.review_text, r.review_is_english, r.review_text_eng, r.has_host_response,
  // r.host_reply_text FROM users u, reviews r WHERE r.room_id=${roomid} AND u.id=r.reviewer_id;`;

  connection.query(queryStr, (err, results) => {
    if(err) {
      callback(err)
    } else {
      callback(null, results);
    }
  })
}

const getReviewsByRoomIdAndQueryTerm = (roomid, queryTerm, callback) => {
  var queryStr = `SELECT users.first_name, reviews.room_id, reviews.review_date, 
  reviews.review_text, reviews.review_is_english, reviews.review_text_eng, reviews.has_host_response,
  reviews.host_reply_text 
  FROM reviews INNER JOIN users ON reviews.reviewer_id = users.id
  WHERE reviews.room_id=${roomid} AND reviews.review_text LIKE '%${queryTerm}%';`

  connection.query(queryStr, (err, results) => {
    if(err) {
      callback(err)
    } else {
      callback(null, results);
    }
  })
}

const getAverageStarsByRoomId = (roomid, callback) => {
  var queryStr = `SELECT AVG(stars_accuracy), AVG(stars_communication), 
    AVG(stars_location), AVG(stars_checkin), AVG(stars_cleanliness), 
    AVG(stars_value) FROM reviews WHERE room_id=${roomid}`;

  connection.query(queryStr, (err, results) => {
    if(err) {
      callback(err)
    } else {
      callback(null, results);
    }
  })
}

// connection.end();

module.exports = {
  connection,
  getReviewsByRoomId,
  getReviewsByRoomIdAndQueryTerm,
  getAverageStarsByRoomId,
}
