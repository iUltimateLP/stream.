/*
	 	   _                                         
	 ___  | |_   _ __    ___    __ _   _ __ ___      
	/ __| | __| | '__|  / _ \  / _` | | '_ ` _ \     
	\__ \ | |_  | |    |  __/ | (_| | | | | | | |  _ 
	|___/  \__| |_|     \___|  \__,_| |_| |_| |_| (_)
													
	Created by David Bollmann and Jonathan Verbeek (jverbeek.de)
	Hochschule Bremen City University of Applied Sciences
*/

// Watch.js: Player component for videos

import React from 'react';

class Watch extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id
        };
    }

    render() {
        return (
            <h1>Watch {this.state.id}</h1>
        );
    }
}

export default Watch;
