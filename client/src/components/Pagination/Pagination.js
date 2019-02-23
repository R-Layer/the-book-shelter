import React from 'react'

import './pagination.css';

const Pagination = ({pages, changePage}) => {
  return (
    <div className="controls-container">
     {pages[0] >= 10 && 
      <span 
        className="nav-button"
        onClick={() => changePage('prev')}> 
          &lt; Prev 
      </span>}
      <span>{(pages[0] + 10)/10}</span>
     {pages[0] < pages[1] -10 && 
      <span 
        className="nav-button"
        onClick={() => changePage('next')}> 
          Next &gt; 
      </span>}
    </div>
  )
}

export default Pagination
