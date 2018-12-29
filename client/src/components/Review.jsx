import React from 'react';
import HostResponse from './HostResponse.jsx';

const Review = (props) => {

  const hasHostResponse = props.review.has_host_response; // 0 false, 1 true

  const basicRender = (
    <div>
    <div className="review_name"><b>{props.review.first_name}</b></div>
    <img className="review_image_photo_path" src={props.review.image_photo_path} />
    <div className="review_date">{props.review.review_date}</div>
    <div className="review_text">{props.review.review_text}</div>
    </div>
  )

  if(hasHostResponse) {
    return (
      <div>
      {basicRender}
      <HostResponse hostInformation={props.hostInformation} review={props.review} />
      </div>
    )
  }
  
  if(!hasHostResponse) {
    return basicRender
  }
}

export default Review;