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
				thumbnail: "assets/img/content_placeholder.png"
			}, {
				id: 2,
				title: "Test Item 2",
				station: "Bremen Vier",
				thumbnail: "assets/img/content_placeholder.png"
			}, {
				id: 3,
				title: "Test Item 3",
				station: "Bremen Vier",
				thumbnail: "assets/img/content_placeholder.png"
			}, {
				id: 4,
				title: "Test Item 4",
				station: "Bremen Vier",
				thumbnail: "assets/img/content_placeholder.png"
			}, {
				id: 5,
				title: "Test Item 5",
				station: "Bremen Vier",
				thumbnail: "assets/img/content_placeholder.png"
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
			}],
			filterBarOpen: false
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
				<section className={"media-container"}> {/*Grid container spacing={2} justify="center"*/}
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
						{this.state.media.map((value) => (
							<MediaCard key={value.id} item={value}/>
						))}
					</div>
					<svg className={"deco-circle right"} style={{"transform": "translateX(50%)", "marginBottom": "0"}} viewBox="0 0 1024 1024">
						<circle style={{"fill": "#00E676"}} cx="511.5" cy="511.5" r="512"/>
					</svg>
					<svg className={"deco-circle"} style={{"transform": "translateX(-50%) translateY(50%)", "marginBottom": "-50%"}} viewBox="0 0 1024 1024">
						<circle style={{"fill": "#7C4DFF"}} cx="511.5" cy="511.5" r="512"/>
					</svg>
				</section>
			</div>
		);
	}
}

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

export default Home;
