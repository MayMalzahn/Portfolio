import React from 'react';
import {NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import '../App.css';

const Header = props =>{
  return (
	  
	  <header>
		<img src= {logo} alt= 'logo'></img>
	  <div>
	  <h1>Mayjenta Malzahn</h1>
	  <div>
	  	<button><NavLink to='/'>Home</NavLink></button>
	  	<button><NavLink to='/projects'>Projects</NavLink></button>
	  	<button><NavLink to='/why'>Why Do I Need a Website?</NavLink></button>
	  </div>
	  </div>
	   </header>
	  
	  
	  
  );
}

export default Header;