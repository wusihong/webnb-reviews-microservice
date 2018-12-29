import React from 'react';

const HostResponse = (props) => (
  <div>
  <img className="host_image_photo_path" src={props.hostInformation.image_photo_path} />
  <div className="host_name"><b>Response from {props.hostInformation.first_name}</b></div>
  <div className="host_reply_text">{props.review.host_reply_text}</div>
  </div>
)

export default HostResponse;