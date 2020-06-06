/*
	 	   _                                         
	 ___  | |_   _ __    ___    __ _   _ __ ___      
	/ __| | __| | '__|  / _ \  / _` | | '_ ` _ \     
	\__ \ | |_  | |    |  __/ | (_| | | | | | | |  _ 
	|___/  \__| |_|     \___|  \__,_| |_| |_| |_| (_)
													
	Created by David Bollmann and Jonathan Verbeek (jverbeek.de)
	Hochschule Bremen City University of Applied Sciences
*/

import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// Light theme
const lightTheme = createMuiTheme({
	palette: {
		type: "light",
		primary: {
			main: '#556cd6',
		},
		secondary: {
	  		main: '#19857b',
		},
		error: {
	  		main: red.A400,
		},
		background: {
	  		default: '#F3F3F3',
		}
  	},
});

// Dark theme
const darkTheme = createMuiTheme({
	palette: {
		type: "dark",
		primary: {
			main: '#556cd6',
		},
		secondary: {
	  		main: '#19857b',
		},
		error: {
	  		main: red.A400,
		},
		background: {
	  		default: '#212121',
		},
  	},
});

// Object to export for simplicity
const theme = {
	light: lightTheme,
	dark: darkTheme
}

export default theme;