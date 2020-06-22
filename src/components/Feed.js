/*
	 	   _                                         
	 ___  | |_   _ __    ___    __ _   _ __ ___      
	/ __| | __| | '__|  / _ \  / _` | | '_ ` _ \     
	\__ \ | |_  | |    |  __/ | (_| | | | | | | |  _ 
	|___/  \__| |_|     \___|  \__,_| |_| |_| |_| (_)
													
	Created by David Bollmann and Jonathan Verbeek (jverbeek.de)
	Hochschule Bremen City University of Applied Sciences
*/

// Feed.js: The feed is the first section below the showcase carousel and displays currently hot content
//          and allows the user to filter the elements to quickly find whats needed.

import React from 'react'
import { Container, Grid, Paper, Toolbar, Link, Icon } from '@material-ui/core'
import MediaCard from './MediaCard';
import FakeAPI from './../FakeAPI';

class Feed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterBarOpen: false
        }
    }

    render() {
        return (
            <section id={"feed"} className={"media-container"}> {/*Grid container spacing={2} justify="center"*/}
                <Toolbar className={"filter-bar"}>
                    <a onClick={() => this.setState({filterBarOpen: !this.state.filterBarOpen})}>
                        {this.state.filterBarOpen && <Icon>arrow_back_ios</Icon>}
                        {!this.state.filterBarOpen && <Icon>filter_alt</Icon>}
                    </a>
                    <a>Aktuell</a>
                    <a>Podcast</a>
                    <a>Interview</a>
                    <a>Doku</a>
                    <a>Wissen</a>
                </Toolbar>
                {this.state.filterBarOpen && <Toolbar className={"filter-bar-extended"}>
                    <div className={"filter-list"}>
                        <div>
                            <h1>Uploaddatum</h1>
                            <a>Letzte Stunde</a>
                            <a>Heute</a>
                            <a>Diese Woche</a>
                            <a>Diesen Monat</a>
                            <a>Dieses Jahr</a>
                        </div>
                        <div>
                            <h1>Dauer</h1>
                            <a>Kurz (&lt; 5 Min.)</a>
                            <a>Mittel (&lt; 10 Min.)</a>
                            <a>Lang (&lt; 30 Min.)</a>
                        </div>
                        <div>
                            <h1>Sender</h1>
                            <a>Bremen Eins</a>
                            <a>Bremen Zwei</a>
                            <a>Bremen Vier</a>
                            <a>Bremen NEXT</a>
                            <a>buten un binnen</a>
                        </div>
                        <div>
                            <h1>Sortieren nach</h1>
                            <a>Relevanz</a>
                            <a>Uploaddatum</a>
                            <a>Anzahl der Aufrufe</a>
                        </div>
                    </div>
                </Toolbar>}
                <div className={"media-scroller"}>
                    {FakeAPI.getMediaForType(this.props.filter).map((value) => (
                        <MediaCard key={value.id} item={value} type={"dvd"}/>
                    ))}
                </div>
                <svg className={"deco-circle right"} style={{"transform": "translateX(50%)", "marginBottom": "0"}} viewBox="0 0 1024 1024">
                    <circle style={{"fill": "#00E676"}} cx="511.5" cy="511.5" r="512"/>
                </svg>
                <svg className={"deco-circle"} style={{"transform": "translateX(-50%) translateY(75%)", "marginBottom": "-75%"}} viewBox="0 0 1024 1024">
                    <circle style={{"fill": "#7C4DFF"}} cx="511.5" cy="511.5" r="512"/>
                </svg>
            </section>
        );
    }
}

export default Feed;
