var mysql = require('mysql');
var dummydata = require('./dummydata.js')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'airbnb'
});

connection.connect();

var seedUserTable = () => {
  var usersDummyData = dummydata.createUsersTableData();
  var queryStr = `INSERT INTO users (firstName, lastName, image_photo_path) VALUES (?, ?, ?);`
  
  usersDummyData.forEach((user) => {
    var params = [user.firstName, user.lastName, user.image_photo_path];
    connection.query(queryStr, params, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log('success', results)
      }
    })
  })
}

seedUserTable();

var seedRoomsTable = () => {
  var usersDummyData = dummydata.createRoomsTableData();
  var queryStr = `INSERT INTO rooms (name, host_id) VALUES (?, ?);`
  
  usersDummyData.forEach((room) => {
    var params = [room.name, room.host_id];
    connection.query(queryStr, params, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log('success', results)
      }
    })
  })
}

seedRoomsTable();

var seedReviewsTable = () => {
    var usersDummyData = dummydata.createReviewsTableData();
    var queryStr = `INSERT INTO reviews (reviewer_id, room_id, review_date, review_text, reviewIsEnglish, review_text_eng, hasHostResponse, host_reply_text, stars_accuracy, stars_communication, stars_location, stars_checkin, stars_cleanliness, stars_value) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`
    
    usersDummyData.forEach((review) => {
      var params = [review.reviewer_id, review.room_id, review.review_date, review.review_text, review.reviewIsEnglish, review.review_text_eng, review.hasHostResponse, review.host_reply_text, review.stars_accuracy, review.stars_communication, review.stars_location, review.stars_checkin, review.stars_cleanliness, review.stars_value];
    
      connection.query(queryStr, params, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log('success', results)
        }
      })
    })
  }

seedReviewsTable();

module.exports = {
  connection,
}