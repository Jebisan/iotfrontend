import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => (
  <div> 
    <header className="header">
      <div className="content-container"> 
        <div className="header__content"> 
          <Link className="header__title" to="/"> 
            <h1 className="brand">CleverCup</h1>
          </Link> 
        </div> 
      </div> 
    </header>
    <div className="page-header"> 
      <div className="content-container"> 
      <h1></h1>
        <NavLink to="/location" className="nav-link" activeClassName="is-active">Location   </NavLink>
        <NavLink to="/range" className="nav-link" activeClassName="is-active">Temperature Range   </NavLink>
        <NavLink to="/statistics" className="nav-link" activeClassName="is-active">Statistics </NavLink>
     
      </div> 
    </div> 
  </div> 
);

export default Header;
