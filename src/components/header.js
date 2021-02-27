import React from 'react';
import {NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import '../App.css';

const Header = props =>{
  return (
	  
	  <header style={styles.head} class='header'>
		<img src= {logo} style={styles.headImg1} alt= 'logo'></img>
	  <div style={styles.cent}>
	  <h1>Mayjenta Malzahn, Web Designer and Developer</h1>
	  <div style={styles.nav}>
	  	<button style={styles.button}><NavLink to='/'>Home</NavLink></button>
	  	<button style={styles.button}><NavLink to='/projects'>Projects</NavLink></button>
	  	<button style={styles.button}><NavLink to='/why'>Why Do I Need a Website?</NavLink></button>
	  </div>
	  </div>
	  <div></div>
	   </header>
	  
	  
	  
  );
}

export default Header;

const styles ={
		head:{
		top: 0,
		position: 'static',
		height: '115px',
		width: '100%',
		
		boxShadow: '-2px 2px rgb(28, 0, 0)',
		color: 'rgb(204,153,204)',
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: '5px',
		paddingRight: '5px',
		fontFamily: 'Charm',
			
		},
	headImg1:{
		maxWidth: '200px',
		maxHeight: '100px',
		float: 'left',
	},

	button:{
		fontFamily:'Cinzel',
		backgroundColor:'rgb(255,102,102)',
		color: 'rgb(28, 0, 0)',
		margin: '3px',
		alignSelf: 'center',
		fontWeight: "bold",
		
	},
	nav: {
		alignSelf:'center',
		marginBottom: '5px',
	},
	cent: {
		display: 'flex',
		flexDirection: 'column',
	}

	
		
}