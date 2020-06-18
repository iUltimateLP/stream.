/*
	 	   _                                         
	 ___  | |_   _ __    ___    __ _   _ __ ___      
	/ __| | __| | '__|  / _ \  / _` | | '_ ` _ \     
	\__ \ | |_  | |    |  __/ | (_| | | | | | | |  _ 
	|___/  \__| |_|     \___|  \__,_| |_| |_| |_| (_)
													
	Created by David Bollmann and Jonathan Verbeek (jverbeek.de)
	Hochschule Bremen City University of Applied Sciences
*/

import React from 'react'
import { Typography, Container, Button, Card, CardContent, CardActions, Grid } from '@material-ui/core'
import { Switch, Route, Link } from 'react-router-dom';

const MediaCard = (props) => (
    <Link to={`/watch/${props.item.id}`}>
        <div className={"media-tile"}>
            <div className={"media-tile-cover-wrapper"}>
                <div className={"media-tile-cover"} style={{"backgroundImage": "url(\"" + props.item.thumbnail + "\")"}}/>
            </div>
            <h1>{props.item.title}</h1>
            <h4>{props.item.station}</h4>
        </div>
    </Link>
)

export default MediaCard;

