import React from 'react';
import '../App.css';
import AH1 from "../img/AzerothHeroes/AzerothHeroes1.jpg";
import AH2 from "../img/AzerothHeroes/AzerothHeroes2.jpg";
import AH3 from "../img/AzerothHeroes/AzerothHeroes3.jpg";
import AH4 from "../img/AzerothHeroes/AzerothHeroes4.jpg";

class projects extends React.Component{
	 
	render(){
						 
		return(
			<div style={styles.overall}>
			<h2 style={styles.title}>Projects I have worked on</h2>
			<p>Just a taste of what I can do for you!</p>
			<h3 style={styles.subTitle}>Azeroth Heroes</h3>
			<p>This was a fun site I created early in my education for World of Warcaft. It allows people to import character data, and build teams of characters.</p>
			<img src= {AH1} style={styles.img} alt= 'Azeroth Heroes Home Page'></img>
			<img src= {AH2} style={styles.img} alt= 'Azeroth Heroes Character Search'></img>
			<img src= {AH3} style={styles.img} alt= 'Azeroth Heroes Character Search with Multiple Characters'></img>
			<img src= {AH4} style={styles.img} alt= 'Azeroth Heroes Teams Page'></img>
			</div>
		)
	}
}
export default projects;

const styles ={
		overall:{
		textAlign: 'center',
	},
	img:{
		maxWidth: '900px',
		padding: '10px',
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
	subTitle:{
		textAlign: 'center',
		color: 'rgb(255,102,102)',
		fontFamily: 'Charm',
		paddingTop: '25px',
	}
}