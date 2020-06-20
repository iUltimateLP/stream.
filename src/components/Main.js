/*
	 	   _                                         
	 ___  | |_   _ __    ___    __ _   _ __ ___      
	/ __| | __| | '__|  / _ \  / _` | | '_ ` _ \     
	\__ \ | |_  | |    |  __/ | (_| | | | | | | |  _ 
	|___/  \__| |_|     \___|  \__,_| |_| |_| |_| (_)
													
	Created by David Bollmann and Jonathan Verbeek (jverbeek.de)
	Hochschule Bremen City University of Applied Sciences
*/

// Main.js: The main wrapper for the whole web app. Contains the navbar, configures the routes
//          and then leaves rendering the sections themselves to their components

import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Navbar from './Navbar';
import Home from './Home';
import Watch from './Watch';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
}));

function ScrollTop(props) {
	const { children, window } = props;
	const classes = useStyles();
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100,
	});
  
	const handleClick = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
  
		if (anchor) {
			anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};
  
	return (
		<Zoom in={trigger}>
			<div onClick={handleClick} role="presentation" className={classes.root}>
		  		{children}
			</div>
	  	</Zoom>
	);
}

class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<main>
				<Navbar/>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/watch/:id' component={Watch}/>
				</Switch>
				<ScrollTop>
					<Fab color="secondary" size="small" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
					</Fab>
				</ScrollTop>
			</main>
		);
	}
}

export default Main;
