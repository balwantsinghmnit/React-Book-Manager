import React from 'react';
import {BrowserRouter as Router,Link} from "react-router-dom";

function Header(props)
{	return(
		<Router>
		<header>
			<nav className="navbar navbar-expand-lg navbar-dark redback">
			  <div className="container-fluid">
			    <Link className="navbar-brand" to="/">Book Manager</Link>
			    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    <div className="collapse navbar-collapse ml-md-5 ml-lg-5" id="navbarColor02">
			      <ul className="navbar-nav mr-auto mb-2 mb-lg-0  ml-md-5 ml-lg-5">
			        <li className="nav-item active  ml-md-5 ml-lg-5">
			          <Link className="nav-link btn" aria-current="page" to="/">Home</Link>
			        </li>
			        <li className="nav-item  ml-md-5 ml-lg-5">
			          <Link className="nav-link btn" to="/about">About</Link>
			        </li>
			      </ul>
			    </div>
			  </div>
			</nav>
		</header>

		</Router>
		);
}

export default Header;