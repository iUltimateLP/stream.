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

const MediaCard = () => (
    <Grid item xs={4}>
        <Card>
            <CardContent>
                <Typography variant="h5">ABC</Typography>
            </CardContent>
            <CardActions>

            </CardActions>
        </Card>
    </Grid>
)

export default MediaCard;

