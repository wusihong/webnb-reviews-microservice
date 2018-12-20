const faker = require('faker');

////////Helper Functions///////
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const getRandomBoolean = ()=> {
  return Math.round((Math.random() * 1) + 0) === 0;
}

/////////Configurations/////////

var NUM_OF_USERS = 300;
var NUM_OF_ROOMS = 100;
var NUM_OF_HOSTS = 80;
var NUM_OF_MESSAGES = 2000;

///////Table Generators/////////

const createUsersTableData = () => {
  var dummyData = [];
  for (var i = 0; i < NUM_OF_USERS - 1; i++) {
    dummyData.push({ 
      firstName: faker.name.firstName(), 
      lastName: faker.name.lastName(), 
      image_photo_path: faker.image.avatar(),
    });
  }
  return dummyData; 
}
 
var createRoomsTableData = () => {
  var dummyData = [];
  for (var i = 0; i < NUM_OF_ROOMS - 1; i++) {
    dummyData.push({
      name: faker.lorem.words(),
      host_id: getRandomInt(NUM_OF_USERS - 1), 
    })
  }
  return dummyData;
}

var createMessagesTableData = () => {
  var dummyData = [];
  for (var i = 0; i <   NUM_OF_MESSAGES - 1; i++) {
    dummyData.push({
      reviewer_id: getRandomInt(NUM_OF_USERS - 1),
      room_id: getRandomInt(NUM_OF_ROOMS - 1),
      review_data: faker.date.past(),
      review_text: faker.lorem.paragraph(),
      reviewIsEnglish: getRandomBoolean(),
      review_text_english: faker.lorem.paragraph(), 
      hasHostResponse: getRandomBoolean(),
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

console.log(createMessagesTableData());
module.exports = {
  createUsersTableData,
  createRoomsTableData,
  createMessagesTableData,
}
