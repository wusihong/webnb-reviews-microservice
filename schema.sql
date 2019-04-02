DROP DATABASE IF EXISTS airbnb; 

CREATE DATABASE IF NOT EXISTS airbnb; 

USE airbnb; 

CREATE TABLE users (
 id INT AUTO_INCREMENT PRIMARY KEY,
 first_name VARCHAR(50), 
 last_name VARCHAR(50),
 image_photo_path VARCHAR(200)
);

CREATE TABLE rooms (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(50),
 host_id INT,
 FOREIGN KEY fk_host(host_id) REFERENCES users(id)
);

CREATE TABLE reviews (
 id INT AUTO_INCREMENT PRIMARY KEY,
 reviewer_id INT,
 room_id INT,
 review_date DATE,
 review_text VARCHAR(700),
 review_is_english BOOLEAN, 
 review_text_eng VARCHAR(700),
 has_host_response BOOLEAN, 
 host_reply_text VARCHAR(700),
 stars_accuracy INT,
 stars_communication INT,
 stars_location INT,
 stars_checkin INT, 
 stars_cleanliness INT, 
 stars_value INT, 
 FOREIGN KEY fk_reviewer(reviewer_id) REFERENCES users(id),
 FOREIGN KEY fk_room(room_id) REFERENCES rooms(id)
);
