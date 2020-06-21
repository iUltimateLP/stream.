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
import FakeAPI from './../FakeAPI';

class Watch extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            media: FakeAPI.fetchMedia(props.match.params.id),
            type: props.type
        };
    }

    render() {
        return (
            <div>
                <section>
                    <div className={"video-player"}>

                    </div>
                </section>
                <section>
                    <div className={"video-info"}>
                        <h1>{this.state.media.title}</h1>
                        <div className={"video-subtitle"}>
                            <h2>{this.state.media.station}</h2>
                            <p>{this.state.media.date}</p>
                        </div>
                        <p>
                            {this.state.media.description}
                        </p>
                        <div className={"share-container"}>
                            <a href="#"><i className={"fa fa-facebook"}></i></a>
                            <a href="#"><i className={"fa fa-twitter"}></i></a>
                            <a href="#"><i className={"fa fa-envelope"}></i></a>
                            <a href="#"><i className={"fa fa-share"}></i></a>
                        </div>
                        <div className={"actors-container"}>
                            {
                                this.state.media.actors.map((actor) => (
                                    <div className={"actor"}>{actor.short}</div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Watch;
