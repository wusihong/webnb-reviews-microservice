import React from 'react';

const Review = (props) => (
  <div>
  <div className="review_name"><b>{props.review.first_name}</b></div>
  <img className="review_image_photo_path" src={props.review.image_photo_path} />
  <div className="review_date">{props.review.review_date}</div>
  <div className="review_text">{props.review.review_text}</div>
  </div>
)
export default Review;