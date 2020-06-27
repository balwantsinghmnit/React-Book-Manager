import React from 'react';
import photo from "./new.jpg";

function About(props) {

	const deleteBook = ()=>{
		props.deleteBook(props.book.title);
	}
  return (
  		<center>
		  	<div className="card mt-5" style={{width:"400px"}}>
			  <img src={photo} className="card-img-top" alt="..."/>
			  <div className="card-body">
			    <h5 className="card-title">Balwant Singh</h5>
			    <p className="card-text">Hi there! I'm Balwant Singh,owner of this simple react website.I have used React for front end and bootstrap 5 ,which is just released,to style this simple website.</p>
			    <a href="https://github.com/balwantsinghmnit" className="btn text-white redback">Github</a>
			  </div>
			</div>
		</center>
 );
}

export default About;
