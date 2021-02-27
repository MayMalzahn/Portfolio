import React from 'react';
import '../App.css';

const Footer = props =>  {
  return (
   	<footer style={styles.foot}>
		<p>Mayjenta Malzahn 2021</p>
		</footer>
  );
}

export default Footer;

const styles ={
		foot:{
		bottom: 0,
		position: 'static',
		height: '100px',
		width: '100%',
		backgroundColor: 'rgb(0, 0, 0)',
		boxShadow: '2px -2px rgb(28, 0, 0)',
		color: 'white',
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: '50vh',
		},
	footImg:{
		maxWidth: '100%',
		maxHeight: '100%',

	}
}