import React from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Routes from './components/routes';
import { BrowserRouter as Router } from "react-router-dom";
import sparks from './img/sparks.png'

function App() {
  return (
 		  <div class='body'>
	  <Router>
		<Header />
	  	<div style={styles.mid}>
		 <Routes />
	  </div>
		<Footer />
	  </Router>
	  </div>
  );
}

export default App;
const styles ={

	mid:{
		margin: '25px',
		fontSize: '125%',
		
	}
}
