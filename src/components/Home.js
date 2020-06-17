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
import { Container, Grid, Paper, Toolbar, Link, Icon } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import MediaCard from './MediaCard';

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			media: [{
				id: 1,
				title: "Test Item 1",
				station: "Bremen Vier",
				thumbnail: ""
			}, {
				id: 2,
				title: "Test Item 2",
				station: "Bremen Vier",
				thumbnail: ""
			}, {
				id: 3,
				title: "Test Item 3",
				station: "Bremen Vier",
				thumbnail: ""
			}, {
				id: 4,
				title: "Test Item 4",
				station: "Bremen Vier",
				thumbnail: ""
			}, {
				id: 5,
				title: "Test Item 5",
				station: "Bremen Vier",
				thumbnail: ""
			}],
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
				<Carousel className={"showcase-carousel"} animation="slide" indicators={false} interval={5000}>
					{
						this.state.showcase.map((value) => (
							<ShowcaseItem key={value.id} item={value}/>
						))
					}
				</Carousel>
				<Toolbar className={"filter-bar"}>
					<a href="#"><Icon>filter_alt</Icon></a> {/*arrow_back_ios*/}
					<a href="#">Aktuell</a>
					<a href="#">Podcast</a>
					<a href="#">Interview</a>
					<a href="#">Doku</a>
					<a href="#">Wissen</a>
				</Toolbar>
				<Grid container spacing={2} justify="center">
					{this.state.media.map((value) => (
						<MediaCard key={value.id} item={value}/>
					))}
				</Grid>
			</div>
		);
	}
}

function ShowcaseItem(props) {
	return (
		<div className={"showcase-wrapper"}>
			<img className={"showcase-image"} src={props.item.image} />
			<div className={"showcase-texts"}>
				<h1>{props.item.title}</h1>
				<h4>{props.item.description}</h4>
			</div>
		</div>
	);
}

export default Home;
