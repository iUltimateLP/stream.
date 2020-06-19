/*
	 	   _                                         
	 ___  | |_   _ __    ___    __ _   _ __ ___      
	/ __| | __| | '__|  / _ \  / _` | | '_ ` _ \     
	\__ \ | |_  | |    |  __/ | (_| | | | | | | |  _ 
	|___/  \__| |_|     \___|  \__,_| |_| |_| |_| (_)
													
	Created by David Bollmann and Jonathan Verbeek (jverbeek.de)
	Hochschule Bremen City University of Applied Sciences
*/

// Selected.js: A reusable React component for the "staff pick" sections, such as Recommended,
//              Favourites and Archive. Their source is easily switchable, but the logic is
//              handled the same.

import React from 'react'
import { Container, Grid, Paper, Toolbar, Link, Icon } from '@material-ui/core'
import MediaCard from './MediaCard';

class Selected extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>

            </section>
        );
    }
}

export default Selected;
