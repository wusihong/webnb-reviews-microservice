const faker = require('faker');

const createUsersTableData = () => {
  var userTable = [];
  for (var i = 0; i < 100; i++) {
    var randomFirstName = faker.name.firstName();
    var randomLastName = faker.name.lastName();
    var randomAvatar = faker.image.avatar();
    userTable.push({ 
        firstName: randomFirstName, 
        lastName: randomLastName, 
        image_photo_path: randomAvatar,
    });
  }
  return userTable; 
}

var createRoomsTableData = () => {

}

var createMessagesTableData = () => {

}

// var populateRoomsTable 

// var populateReviewsTable 