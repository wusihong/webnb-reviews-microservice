import React from 'react';

const Stars = (props) => {

  return ( 
    <div>
      <div><span><b>Accuracy</b>{props.stars.accuracy}</span><span><b>Location</b>{props.stars.location}</span></div>
      <div><span><b>Communication</b>{props.stars.communication}</span><span><b>Check-in</b>{props.stars.check_in}</span></div>
      <div><span><b>Cleanliness</b>{props.stars.cleanliness}</span><span><b>Value</b>{props.stars.value}</span></div>
    </div>
  )
}

export default Stars;
