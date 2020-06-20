/*
	 	   _                                         
	 ___  | |_   _ __    ___    __ _   _ __ ___      
	/ __| | __| | '__|  / _ \  / _` | | '_ ` _ \     
	\__ \ | |_  | |    |  __/ | (_| | | | | | | |  _ 
	|___/  \__| |_|     \___|  \__,_| |_| |_| |_| (_)
													
	Created by David Bollmann and Jonathan Verbeek (jverbeek.de)
	Hochschule Bremen City University of Applied Sciences
*/

// Navbar.js: A React component rendering the app's nav bar

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Switch, Route, Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import { IconButton, TextField } from '@material-ui/core';
import MuiSwitch from '@material-ui/core/Switch';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchBarOpen: false
        }

		this.onSearchClicked.bind(this);
    }

    onSearchClicked() {
		this.setState({
			searchBarOpen: !this.state.searchBarOpen
		});
    }

    render() {
        return (
            <div>
                <AppBar color="inherit">
                    <Toolbar className={"navbar"}>
                        <Link to='/' style={{"flexGrow": 1}}><h1 className={"navbar-title"}>stream.</h1></Link>
                        <a href='#feed'>Kategorien</a>
                        <a href='#recommended'>Empfohlen</a>
                        <a href='#favourite'>Favoriten</a>
                        <a href='#archive'>Archiv</a>
                        <a href='/stations'>Sender</a>
                        <Icon>headset</Icon>
                        <MuiSwitch></MuiSwitch>
                        <Icon style={{"marginRight": "12px"}}>play_arrow</Icon>
                        <IconButton onClick={() => this.onSearchClicked()} color="primary" component="span">
                            <Icon>search</Icon>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Toolbar id="back-to-top-anchor" />
                {this.state.searchBarOpen && <Toolbar className={"navbar-search"}>
                    <TextField className={"navbar-search-textfield"} placeholder="Enter search text" />
                </Toolbar>}
            </div>
        );
    }
}

export default Navbar;
