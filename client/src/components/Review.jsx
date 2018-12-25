import React from 'react';

const Review = (props) => (
  <div>
  <div className="review-avatar">avatar here</div>
  <div className="review_name">{props.review.first_name}</div>
  <div className="review_date">{props.review.review_date}</div>
  <div className="review_text">{props.review.review_text}</div>
  </div>
)
export default Review;