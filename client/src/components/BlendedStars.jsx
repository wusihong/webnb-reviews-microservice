import React from 'react';

const BlendedStars = (props) => {
  
  let blendedAvg = (props.stars.accuracy + props.stars.location + props.stars.communication + props.stars.check_in + props.stars.cleanliness + props.stars.value) / 6;
  let numberOfReviews = props.reviews.length;

  return (
    <div><span><b>{numberOfReviews.toString()} Reviews</b></span><span>{blendedAvg.toString()}</span></div>
  )
}

export default BlendedStars;