/*
	 	   _                                         
	 ___  | |_   _ __    ___    __ _   _ __ ___      
	/ __| | __| | '__|  / _ \  / _` | | '_ ` _ \     
	\__ \ | |_  | |    |  __/ | (_| | | | | | | |  _ 
	|___/  \__| |_|     \___|  \__,_| |_| |_| |_| (_)
													
	Created by David Bollmann and Jonathan Verbeek (jverbeek.de)
	Hochschule Bremen City University of Applied Sciences
*/

// Station.js: 

import React from 'react';
import FakeAPI from './../FakeAPI';
import MediaCard from './MediaCard';

class Station extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            station: FakeAPI.fetchStation(props.match.params.id)
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.setState({
                station: FakeAPI.fetchStation(this.props.match.params.id)
            });
        }
    }

    render() {
        return (
            <section>
                <div className={"stations-container"}>
                    <div style={{"paddingRight": "64px"}}>
                        <div className={"station-header"} style={{"backgroundColor": this.state.station.color}}>
                            <div>
                                <img src={this.state.station.logo} style={{"marginTop": "9px"}}></img>
                            </div>
                        </div>
                        <div className={"station-description"}>
                            <p>{this.state.station.description}</p>
                        </div>
                        <div className={"station-socials"}>
                            <a href="#"><i className={"fa fa-facebook"}></i></a>
                            <a href="#"><i className={"fa fa-twitter"}></i></a>
                            <a href="#"><i className={"fa fa-instagram"}></i></a>
                            <a href="#"><i className={"fa fa-youtube"}></i></a>
                        </div>
                    </div>
                    <div>
                        <div className={"station-content"}>
                            {FakeAPI.getMediaForStation(this.state.station).map((value) => (
                                <MediaCard key={value.id} item={value} type={"small"}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Station;
