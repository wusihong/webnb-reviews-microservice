import React from 'react';
import Review from './Review.jsx'

const Reviews = (props) => {

  return (
    <div>
      {props.visibleReviews.map((review, index) => {
        return <Review key={index} hostDetails={props.hostDetails} review={review}/>
      })
      }
    </div>
  ) 
}

export default Reviews;