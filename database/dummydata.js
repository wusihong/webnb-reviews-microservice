const database = require('./database.js')
const faker = require('faker');

/////////Configurations/////////

let NUM_OF_USERS = 300;
let NUM_OF_ROOMS = 100;
let NUM_OF_MESSAGES = 3000;

let usersQueryStr = `INSERT INTO users (first_name, last_name, image_photo_path) VALUES (?, ?, ?);`;
let usersParams = ['first_name', 'last_name', 'image_photo_path'];

let roomsQueryStr = `INSERT INTO rooms (name, host_id) VALUES (?, ?);`;
let roomsParams = ['name', 'host_id'];

let reviewsQueryStr = `INSERT INTO reviews (reviewer_id, room_id, review_date, review_text, review_is_english, review_text_eng, has_host_response, host_reply_text, stars_accuracy, stars_communication, stars_location, stars_checkin, stars_cleanliness, stars_value) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
let reviewsParams = ['reviewer_id', 'room_id', 'review_date', 'review_text', 'review_is_english', 'review_text_eng', 'has_host_response', 'host_reply_text', 'stars_accuracy', 'stars_communication', 'stars_location', 'stars_checkin', 'stars_cleanliness', 'stars_value'];

////////Helper Functions///////

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const getRandomBoolean = ()=> {
  return Math.round((Math.random() * 1) + 0) === 0;
}

///////Table Generators/////////

const createUsersTableData = () => {
  let dummyData = [];
  for (let i = 0; i < NUM_OF_USERS; i++) {
    dummyData.push({ 
      first_name: faker.name.firstName(), 
      last_name: faker.name.lastName(), 
      image_photo_path: faker.image.avatar(),
    });
  }
  return dummyData; 
}

const createRoomsTableData = () => {
  let dummyData = [];
  for (let i = 0; i < NUM_OF_ROOMS; i++) {
    dummyData.push({
      name: faker.lorem.words(),
      host_id: getRandomInt(NUM_OF_USERS), 
    })
  }
  return dummyData;
}

const createReviewsTableData = () => {
  let dummyData = [];
  for (let i = 0; i < NUM_OF_MESSAGES; i++) {
    dummyData.push({
      reviewer_id: getRandomInt(NUM_OF_USERS),
      room_id: getRandomInt(NUM_OF_ROOMS),
      review_date: faker.date.past(),
      review_text: faker.lorem.paragraph(),
      review_is_english: getRandomBoolean(),
      review_text_eng: faker.lorem.paragraph(), 
      has_host_response: getRandomBoolean(),
      host_reply_text: faker.lorem.paragraph(), 
      stars_accuracy: getRandomInt(5), 
      stars_communication: getRandomInt(5),
      stars_location: getRandomInt(5),
      stars_checkin: getRandomInt(5),
      stars_cleanliness: getRandomInt(5),
      stars_value: getRandomInt(5),
    })
  }
  return dummyData;
}

const seedTable = (tableGeneratorFunc, queryStr, params) => {
  let usersDummyData = tableGeneratorFunc();

  usersDummyData.forEach((row) => {
    let rowParams = []
    params.forEach((string) => {
      rowParams.push(row[string]);
    })
    database.connection.query(queryStr, rowParams, (err, results) => {
      if (err) {
        console.log(err)
      } else {
        console.log('successfully seeded database: ', results);
      }
    })
  })
}

seedTable(createUsersTableData, usersQueryStr, usersParams);
seedTable(createRoomsTableData, roomsQueryStr, roomsParams);
seedTable(createReviewsTableData, reviewsQueryStr, reviewsParams);

database.connection.end()

/////////Refactor to Promises//////////

// const usersDummyData = createUsersTableData();
// const roomsDummyData = createRoomsTableData();
// const reviewsDummyData = createReviewsTableData();

// const usersPromises = [];
// usersDummyData.forEach((row) => {
//   var rowParams = []
//   usersParams.forEach((string) => {
//     rowParams.push(row[string]);
//   })
//   const usersPromise = new Promise((resolve, reject) => {
//     database.connection.query(usersQueryStr, rowParams, (err, results) => {
//       if (err) {
//         console.log(err);
//         reject(err)
//       } else {
//         console.log(results)
//         resolve(results);
//       }
//     })
//   })
//   usersPromises.push(usersPromise);
// })

// Promise.all(usersPromises)
//   .then(() => {
    
//     const roomsPromises = [];
//     roomsDummyData.forEach((row) => {
//       var rowParams = []
//       roomsParams.forEach((string) => {
//         rowParams.push(row[string]);
//       })
//       const roomsPromise = new Promise((resolve, reject) => {
//         database.connection.query(roomsQueryStr, rowParams, (err, results) => {
//           if (err) {
//             console.log(err);
//             reject(err)
//           } else {
//             console.log(results)
//             resolve(results);
//           }
//         })
//       })
//       roomsPromises.push(roomsPromise);
//     })

//     Promise.all(roomsPromises).then(() => {

//       const reviewsPromises = [];
//       reviewsDummyData.forEach((row) => {
//         var rowParams = []
//         reviewsParams.forEach((string) => {
//           rowParams.push(row[string]);
//         })
//         const reviewsPromise = new Promise((resolve, reject) => {
//           database.connection.query(reviewsQueryStr, rowParams, (err, results) => {
//             if (err) {
//               console.log(err);
//               reject(err)
//             } else {
//               console.log(results)
//               resolve(results);
//             }
//           })
//         })
//         reviewsPromises.push(reviewsPromise);
//       })

//       Promise.all(reviewsPromises).then(() => {
//         connection.end();
//       });
//     });
//   })

// database.connection.end()
