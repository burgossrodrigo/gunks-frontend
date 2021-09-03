import './App.css';
import { Container, Box, Divider } from '@material-ui/core';
import Header from './components/Header';
import FeaturedPost from './components/FeaturedPost';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import MyComponent from "./MyComponent";
import React, { useState, useEffect } from 'react';
import getWeb3 from './ethereum.js';
import Footer from './components/Footer';
import Particles from 'react-particles-js';
import { tsParticles } from "tsparticles";


function App() {
		
		const theme = createMuiTheme({
		palette: {
		  type: "dark",
		},
		spacing: 2,

		});

		getWeb3();

		useEffect(() => {
			document.title = `Gunks`;
		  });

  return (
    
    <ThemeProvider theme={theme}>
		<Container maxWidth='lg'>
		<Particles style={{zIndez: '99', height:'100%', position: 'fixed'}} />
		
			
			<Header />
			<FeaturedPost />
			<Divider /> 	
			<Footer />	
		</Container>
	</ThemeProvider>
  );
}

export default App;
