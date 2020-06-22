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
import MediaCard from './MediaCard';

class Watch extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
            media: FakeAPI.fetchMedia(props.match.params.id),
            currentChapter: 1
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.setState({
                media: FakeAPI.fetchMedia(this.props.match.params.id)
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.media.type == "video" && <div>
                    <section>
                        <div className={"video-player"}>

                        </div>
                    </section>
                    <section>
                        <div className={"video-info"}>
                            <div>
                                <h1>{this.state.media.title}</h1>
                                <div className={"video-subtitle"}>
                                    <h2>{FakeAPI.fetchStation(this.state.media.station).name}</h2>
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
                                            <div className={"actor"} title={actor.long}>{actor.short}</div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div style={{"justify-self": "right"}}>
                                <h2>Nächster Titel</h2>
                                <MediaCard type={"small"} item={FakeAPI.randomMedia()}/>
                            </div>
                        </div>
                    </section>
                </div>}
                {this.state.media.type == "audio" && <div className={"audio-player"}>
                    <div className={"cover"} style={{"backgroundImage": "url(\"/" + this.state.media.thumbnail + "\")"}}></div>
                    <div className={"info"}>
                        <h1>{this.state.media.title}</h1>
                        <div className={"video-subtitle"}>
                            <h2>{FakeAPI.fetchStation(this.state.media.station).name}</h2>
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
                                    <div className={"actor"} title={actor.long}>{actor.short}</div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={"chapters"}>
                        <h1>Kapitel</h1>
                        <div className={"chapters-scroller"}>
                            {
                                [1, 2, 3, 4].map((index) => (
                                    <div className={"chapter"} onClick={() => this.setState({currentChapter: index})}>
                                        {index == this.state.currentChapter && <i className={"fa fa-play"} style={{"paddingRight": "8px", "color": "#f44336"}}></i>}
                                        Kapitel {index}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>}
            </div>
        );
    }
}

export default Watch;
