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

const MediaCard = (props) => (
    <div className={"media-tile"}>
        <div className={"media-tile-cover"} style={{"backgroundImage": "url(\"" + props.item.thumbnail + "\")"}}/>
        <h1>{props.item.title}</h1>
        <h4>{props.item.station}</h4>
    </div>
)

export default MediaCard;

