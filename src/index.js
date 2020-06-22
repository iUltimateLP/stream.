/*
	 	   _                                         
	 ___  | |_   _ __    ___    __ _   _ __ ___      
	/ __| | __| | '__|  / _ \  / _` | | '_ ` _ \     
	\__ \ | |_  | |    |  __/ | (_| | | | | | | |  _ 
	|___/  \__| |_|     \___|  \__,_| |_| |_| |_| (_)
													
	Created by David Bollmann and Jonathan Verbeek (jverbeek.de)
	Hochschule Bremen City University of Applied Sciences
*/

// index.js: The very very first script which gets executed. Sets up react, and renders the App component
//           on the app-root DOM element.

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './components/App';
import theme from './theme';
import * as serviceWorker from './serviceWorker';

if (btoa(prompt("Access restricted! Enter the password to continue!")) == "cmFkaW9icmVtZW4yMDIwMDY=") {
	ReactDOM.render(
		<React.StrictMode>
			<ThemeProvider theme={theme.light}>
				<CssBaseline />
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ThemeProvider>
		</React.StrictMode>,
		document.getElementById('app-root')
	);
} else {
	alert("Wrong password!");
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
