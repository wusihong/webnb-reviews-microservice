import React from 'react';

const FilterMessage = (props) => {

  const backToAllReviews = (
    <button onClick={props.backToAllReviews} >Back to all reviews</button>
  )

  if(props.visibleReviews.length === 0) {
    return (
      <div>
        <div>None of our guests have mentioned "<b>{props.currentSearchTerm}</b>"</div>
        {backToAllReviews}
      </div>
    )
  }

  if(props.visibleReviews.length === 1) {
    return (
      <div>
        <div>{props.visibleReviews.length.toString()} guest have mentioned "<b>{props.currentSearchTerm}</b>"</div>
        {backToAllReviews}
      </div>
    )
  }

  if(props.visibleReviews.length > 1) {
    return (
      <div>
        <div>{props.visibleReviews.length.toString()} guests have mentioned "<b>{props.currentSearchTerm}</b>"</div>
        {backToAllReviews}
      </div>
    )
  }

}

export default FilterMessage;