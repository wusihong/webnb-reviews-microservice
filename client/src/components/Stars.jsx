import React from 'react';
import { FlexContainer_Row_SpaceBetween } from './Styles.js'; 

const Stars = (props) => {

  return ( 
    <FlexContainer_Row_SpaceBetween>
      <div><span><b>Accuracy</b>{props.stars.accuracy}</span><br></br><span><b>Communication</b>{props.stars.communication}</span><br></br><span><b>Cleanliness</b>{props.stars.cleanliness}</span></div>
      <div><span><b>Location</b>{props.stars.location}</span><br></br><span><b>Check-in</b>{props.stars.check_in}</span><br></br><span><b>Value</b>{props.stars.value}</span></div>
    </FlexContainer_Row_SpaceBetween>
  )
}

export default Stars;
