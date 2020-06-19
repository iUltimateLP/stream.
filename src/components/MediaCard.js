/*
	 	   _                                         
	 ___  | |_   _ __    ___    __ _   _ __ ___      
	/ __| | __| | '__|  / _ \  / _` | | '_ ` _ \     
	\__ \ | |_  | |    |  __/ | (_| | | | | | | |  _ 
	|___/  \__| |_|     \___|  \__,_| |_| |_| |_| (_)
													
	Created by David Bollmann and Jonathan Verbeek (jverbeek.de)
	Hochschule Bremen City University of Applied Sciences
*/

// MediaCard.js: Represents a reusable media card React component which is clickable to redirect to
//               the player of the content the media card is responsible for.

import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';

class MediaCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item: props.item,
            type: props.type
        }
    }

    render() {
        return (
            <Link to={`/watch/${this.state.item.id}`}>
                <div className={"media-tile " + this.state.type}>
                    <div className={"media-tile-cover-wrapper"}>
                        <div className={"media-tile-cover"} style={{"backgroundImage": "url(\"" + this.state.item.thumbnail + "\")"}}/>
                    </div>
                    <h1>{this.state.item.title}</h1>
                    <h4>{this.state.item.station}</h4>
                </div>
            </Link>
        );
    }
}

export default MediaCard;

