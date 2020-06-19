/*
	 	   _                                         
	 ___  | |_   _ __    ___    __ _   _ __ ___      
	/ __| | __| | '__|  / _ \  / _` | | '_ ` _ \     
	\__ \ | |_  | |    |  __/ | (_| | | | | | | |  _ 
	|___/  \__| |_|     \___|  \__,_| |_| |_| |_| (_)
													
	Created by David Bollmann and Jonathan Verbeek (jverbeek.de)
	Hochschule Bremen City University of Applied Sciences
*/

// Home.js: The whole "home" page rendered at the route '/'. Renders all elements on the home page,
//          such as the showcase carousel, the Feed, etc.

import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Feed from './Feed';

function ShowcaseItem(props) {
	return (
		<div className={"showcase-wrapper"}>
			<div className={"showcase-image"} style={{"backgroundImage": "url(\"" + props.item.image + "\")"}} />
			<div className={"showcase-texts"}>
				<h1>{props.item.title}</h1>
				<h4>{props.item.description}</h4>
			</div>
		</div>
	);
}

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showcase: [{
				id: 1,
				image: "assets/img/chai_society.png",
				title: "Chai Society",
				description: "Folge 3: Das Zuckerpasten-Trauma"
			}, {
				id: 2,
				image: "https://mediafiles.mein-haustier.de/wp-content/uploads/2018/04/Collie-Hund-auf-der-Suche-auf-der-gr%C3%BCnen-Wiese-im-Sonnenlicht-iStock-847292246-1270x608.jpg",
				title: "Die Collies",
				description: "Folge 24: Rico spielt Ball (erneut)"
			}]
		};
	}

	render() {
		return (
			<div>
				<section>
					<Carousel className={"showcase-carousel"} animation="slide" indicators={false} interval={5000}>
						{
							this.state.showcase.map((value) => (
								<ShowcaseItem key={value.id} item={value}/>
							))
						}
					</Carousel>
				</section>
				<Feed/>
			</div>
		);
	}
}

export default Home;
