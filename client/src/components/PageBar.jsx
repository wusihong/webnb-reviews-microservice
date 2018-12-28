import React from 'react';
import PageBarNumberButton from './PageBarNumberButton.jsx';

const PageBar = (props) => {

  var pages = Math.ceil(props.reviews.length / 7)
  var pageButtons = [];
  {for(var i = 0; i < pages; i++) {
    pageButtons.push(i + 1)
  }}

  return (

    <div>
      <button onClick={() => {props.toggleVisibleReviews(props.beginningIndexForVisibleReviews - 7)}} >previous page</button>
      {pageButtons.map((pageNum, index) => {
        const beginningIndexForReviews = index * 7;
        return <PageBarNumberButton key={index} pageNum={pageNum} beginningIndexForReviews={beginningIndexForReviews} toggleVisibleReviews={props.toggleVisibleReviews} />
      })
      }
      <button onClick={() => {props.toggleVisibleReviews(props.beginningIndexForVisibleReviews + 7)}} >next page</button>
    </div>
  )
  
}

export default PageBar;

// onClick of nextArrow or previousArrow button 
  // 

// onClick of number button 

// page 1
  // no previousPage
  // 1, 2, 3, ... , 22 , nextPage 

// page 2 
  // previousPage, 1, 2, 3, ..., 22, nextPage

// page 3 
  // previousPage, 1, 2, 3, 4, ...., 22, nextPage

// page 4
  // previousPage, 1, 2, 3, 4, 5, ..., 22, nextPage

// page 5, 
  // previousPage, 1, ..., 4, 5, 6, ..., 22, nextPage

// page 6
  // previousPage, 1, ..., 5, 6, 7, ..., 22, nextPage

// ...

// page 17
  // previousPage, 1, ..., 16, 17, 18, ..., 22 nextPage

// page 18 
  // previousPage, 1, ..., 17, 18, 19, ..., 22 nextPage

// page 19
  // previousPage, 1, ..., 18, 19, 20, 21, 22, nextPage

// page 20
  // previousPage, 1, ..., 19, 20, 21, 22, nextPage

// page 21
  // previousPage, 1, ..., 20, 21, 22, nextPage

// page 22 
  // previousPage, 1, ..., 20 21, 22


// max seven number buttons