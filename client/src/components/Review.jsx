import React from 'react';

const Review = (props) => (
  <div>
  <div className="review_image_photo_path">{props.review.image_photo_path}</div>
  <div className="review_name">{props.review.first_name}</div>
  <div className="review_date">{props.review.review_date}</div>
  <div className="review_text">{props.review.review_text}</div>
  </div>
)
export default Review;