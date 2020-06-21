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
import MediaCard from './MediaCard';
import FakeAPI from './../FakeAPI';

class Selected extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: props.type // Can be "recommended", "favourite" or "archive"
        };
    }

    getHeading() {
        switch (this.state.type) {
            case "recommended":
                return "Empfohlen";
            case "favourite":
                return "Favoriten";
            case "archive":
                return "Archiv";
            default:
                return "Invalid type";
        }
    }

    render() {
        return (
            <section id={this.state.type} className={"selected-container"}>
                <h1>{this.getHeading()}</h1>
                <div className={"selected-grid"}>
                    <MediaCard item={FakeAPI.randomMedia()} type={"dvd"}/>
                    <div className={"selected-scroller"}>
                        {FakeAPI.getMedia().map((value) => (
                            <MediaCard key={value.id} item={value} type={"small"}/>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Selected;
