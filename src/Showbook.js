import React from 'react';

function Showbook(props) {

	const deleteBook = ()=>{
		props.deleteBook(props.book.title);
	}
  return (
  		<center>
		<div className="card w-50 mt-5" style={{border:"1px solid #F6424C"}}>
		  <div className="card-body">
		    <h5 className="card-title">{props.book.title}		    <button type="button" className="btn text-white redback float-right" onClick={deleteBook}>x</button></h5>
		    <p className="card-text">{props.book.author}</p>
		  </div>
		</div>
		</center>
 );
}

export default Showbook;
