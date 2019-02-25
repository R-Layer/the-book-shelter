import React from 'react'

import './pagination.css';

const Pagination = ({pages, changePage}) => {
  /* If one of the following conditions fails 
     it throws an error */
  if (!(Array.isArray(pages) && 
        Number.isInteger(pages[0]) &&
        Number.isInteger(pages[1]))
      ) {
    throw new Error('bad pages format');
  } 
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
    );
};

export default Pagination;
