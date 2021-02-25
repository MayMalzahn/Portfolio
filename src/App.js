import React from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Routes from './components/routes';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
 		  <div>
	  <Router>
		<Header />
	  	<div>
		 <Routes />
	  </div>
		<Footer />
	  </Router>
	  </div>
  );
}

export default App;
