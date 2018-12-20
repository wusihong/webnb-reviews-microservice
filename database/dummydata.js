const faker = require('faker');

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const getRandomBoolean = ()=> {
  return Math.round((Math.random() * 1) + 0) === 0;
}

const createUsersTableData = () => {
  var dummyData = [];
  for (var i = 0; i < 300; i++) {
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
  for (var i = 0; i < 100; i++) {
    dummyData.push({
      name: faker.lorem.words(),
      host_id: getRandomInt(99), 
    })
  }
  return dummyData;
}

var createMessagesTableData = () => {
  var dummyData = [];
  for (var i = 0; i < 10; i++) {
    dummyData.push({
      reviewer_id: getRandomInt(299),
      room_id: getRandomInt(99),
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
      stars_value: getRandomInt(5)
    })
  }
  return dummyData;
}

var usersTableData = createUsersTableData();
var roomsTableData = createRoomsTableData();
var messagesTableData = createMessagesTableData();
