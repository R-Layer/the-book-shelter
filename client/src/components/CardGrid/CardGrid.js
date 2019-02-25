import React from 'react'

import './card-grid.css'

const Card = ({book}) => {
  return (
    <div className="grid-card" >
        <img className="card-image" src={book.thumbnail} alt="fail" />
        <div className="card-body">
            <h4>{book.title}</h4>
            <hr />
            <div>{book.authors ? 
                  book.authors.map(author => <h6 key={author}>{author} <br/> </h6>) :
                  <h6>Unknown</h6>}
            </div>
            <p className="main-body">
              {`${book.publisher || 'Unknown'} - 
                ${book.publishedDate || 'Unknown'}`}
            </p>
            <span>
              {book.categories && book.categories.map(cat =>
               <small key={cat}>{cat}</small>)}
            </span>
        </div>
          <a className="card-action button info" href={book.infoLink} target="_blank" rel="noopener noreferrer">
            More Info
          </a>
        </div>
  );
};

const CardGrid = ({books}) => {
  return (
    <div className="grid-container" >
      {books.length > 0 ?
          books.map(book => <Card book={book} key={book.id}/> )
                        :
          <p className="text-centered">No volume corresponds to the inserted search criteria</p>
      }
    </div>
  )
};
 

export default CardGrid;
