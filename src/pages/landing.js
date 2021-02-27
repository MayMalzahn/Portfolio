import React from 'react';
import '../App.css';
import reduxIcon from "../img/ReduxIcon.png";
import reactIcon from "../img/ReactIcon.png";
import nodeJSIcon from "../img/NodeJSIcon.png";
import mySQLIcon from "../img/MySQLIcon.png";
import JSIcon from "../img/JSIcon.png";
import HTMLIcon from "../img/HTML5Icon.png";
import gitHubIcon from "../img/GitHubIcon.png";
import profilePic from "../img/profilePic.JPG";

class landing extends React.Component{
	 
	render(){
						 
		return(
			<div style={styles.overall}>
			<div>
			<h2 style={styles.title}>Developer, Designer, Gamer Extraordinaire</h2>
			<p>Let me and my love of code help you achive the website of your dreams for your business or hobby, with just the features you want and at a price you can afford.</p>
			</div>
			<div>
			<h2 style={styles.title}>Skilled in the use of...</h2>
			<img src= {reduxIcon} style={styles.img} alt= 'Redux'></img>
			<img src= {reactIcon} style={styles.img} alt= 'React'></img>
			<img src= {nodeJSIcon} style={styles.img} alt= 'NodeJS'></img>
			<img src= {mySQLIcon} style={styles.img} alt= 'MySQL'></img>
			<img src= {JSIcon} style={styles.img} alt= 'JavaScript'></img>
			<img src= {HTMLIcon} style={styles.img} alt= 'HTML'></img>
			<img src= {gitHubIcon} style={styles.img} alt= 'GitHub'></img>
			</div>
			<div>
			<h2 style={styles.title}>Who will be developing your site?</h2>
			<img src= {profilePic} style={styles.proImg} alt= 'Mayjenta'></img>
			<p>Hi! I am Mayjenta, and if you contact me at the method below, I would be happy to discuss developing a website for you or your business. A passion for gaming brought me to programming, and I am turning that passion into a career helping others find their online presence.</p>
			</div>
			<div>
			<h2 style={styles.title}>Contact Me</h2>
			<p>Email: jayne.malzahn@gmail.com</p>
			</div>
			</div>
		)
	}
}
export default landing;
const styles ={
	overall:{
		textAlign: 'center',
	},
	img:{
		maxWidth: '75px',
		maxHeight: '75px',
	},
		proImg:{
		maxWidth: '100px',
		maxHeight: '100px',
		borderRadius: '50%',
		border: 'solid thick rgb(28, 0, 0)'
	},
	title:{
		textAlign: 'center',
		color: 'rgb(204,153,204)',
		fontFamily: 'Charm',
		paddingTop: '25px',
		fontSize: '300%',
	},
}