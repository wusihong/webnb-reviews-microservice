import React from 'react';


const PageBar = (props) => {

  var pages = Math.ceil(props.reviews.length / 7)
  var pageButtons = [];
  {for(var i = 0; i < pages; i++) {
    pageButtons.push(i + 1)
  }}

  return (
    
    <div>
      <button>previous page</button>
      {pageButtons.map((pageNum, index) => {
        return <button key={index}>{pageNum}</button>
      })
      }
      <button>next page</button>
    </div>
  )

}

export default PageBar;