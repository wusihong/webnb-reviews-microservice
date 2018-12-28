import React from 'react';

const PageBarNumberButton = (props) => (
  <button onClick={() => {props.toggleVisibleReviews(props.beginningIndexForReviews)}}>{props.pageNum}</button>
)

export default PageBarNumberButton;