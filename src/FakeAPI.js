/*
	 	   _                                         
	 ___  | |_   _ __    ___    __ _   _ __ ___      
	/ __| | __| | '__|  / _ \  / _` | | '_ ` _ \     
	\__ \ | |_  | |    |  __/ | (_| | | | | | | |  _ 
	|___/  \__| |_|     \___|  \__,_| |_| |_| |_| (_)
													
	Created by David Bollmann and Jonathan Verbeek (jverbeek.de)
	Hochschule Bremen City University of Applied Sciences
*/

// FakeAPI.js: Because for this prototype, we won't actually use real APIs and data,
//             we provide a simple, in-memory fake API here which supplies content
//             for the interface to render.

var fakeAPI = {};

// Enumeration for the type
fakeAPI.contentType = {
    AUDIO: 0,
    ALL: 1,
    VIDEO: 2
};

// A fake set of actors to display on the watch pages, totally random and based on the actors I like ;)
fakeAPI.actors = [{
    short: "EM'B",
    long: "Elyas M' Barek"
}, {
    short: "MS",
    long: "Matthias Schweighöfer"
}, {
    short: "BM",
    long: "Bjarne Mädel"
}, {
    short: "CH",
    long: "Charly Hübner"
}, {
    short: "TS",
    long: "Till Schweiger"
}, {
    short: "FL",
    long: "Frederick Lau"
}, {
    short: "CMH",
    long: "Christoph Maria Herbst"
}];

// Returns an array of random actors (between 1 - 3)
fakeAPI.getRandomActors = function() {
    var howMany = Math.round(Math.random() * 3);
    var actors = [];
    for (var i = 0; i <= howMany; i++) {
        var randomIndex = Math.round(Math.random() * (fakeAPI.actors.length - 1));
        actors.push(fakeAPI.actors[randomIndex]);
    }
    return actors;
}

// A random set of media entries, a real API would provide these
fakeAPI.media = [{
    id: 1,
    type: "video",
    title: "Freiraum",
    station: 2,
    date: "03. April 2020",
    description: "Freiraum stellt klugen Menschen neugierige Fragen. Immer vor Publikum. Immer aus Bremen. Gemacht vom Bremer Presse-Club, Bremen Zwei und dem Weser-Kurier.",
    actors: fakeAPI.getRandomActors(),
    thumbnail: "assets/img/content_1.png",
    source: "path/to/source.mp4"
}, {
    id: 2,
    type: "video",
    title: "Mare Radio",
    station: 2,
    date: "03. April 2020",
    description: "Freiraum stellt klugen Menschen neugierige Fragen. Immer vor Publikum. Immer aus Bremen. Gemacht vom Bremer Presse-Club, Bremen Zwei und dem Weser-Kurier.",
    actors: fakeAPI.getRandomActors(),
    thumbnail: "assets/img/content_2.png",
    source: "path/to/source.mp4"
}, {
    id: 3,
    type: "video",
    title: "KL",
    station: 2,
    date: "03. April 2020",
    description: "Freiraum stellt klugen Menschen neugierige Fragen. Immer vor Publikum. Immer aus Bremen. Gemacht vom Bremer Presse-Club, Bremen Zwei und dem Weser-Kurier.",
    actors: fakeAPI.getRandomActors(),
    thumbnail: "assets/img/content_3.png",
    source: "path/to/source.mp4"
}, {
    id: 4,
    type: "video",
    title: "REWIND",
    station: 4,
    date: "03. April 2020",
    description: "Freiraum stellt klugen Menschen neugierige Fragen. Immer vor Publikum. Immer aus Bremen. Gemacht vom Bremer Presse-Club, Bremen Zwei und dem Weser-Kurier.",
    actors: fakeAPI.getRandomActors(),
    thumbnail: "assets/img/content_4.png",
    source: "path/to/source.mp4"
}, {
    id: 5,
    type: "video",
    title: "Alles Tatami",
    station: 2,
    date: "03. April 2020",
    description: "Freiraum stellt klugen Menschen neugierige Fragen. Immer vor Publikum. Immer aus Bremen. Gemacht vom Bremer Presse-Club, Bremen Zwei und dem Weser-Kurier.",
    actors: fakeAPI.getRandomActors(),
    thumbnail: "assets/img/content_5.png",
    source: "path/to/source.mp4"
}, {
    id: 6,
    type: "audio",
    title: "Audio Item",
    station: 2,
    date: "03. April 2020",
    description: "Freiraum stellt klugen Menschen neugierige Fragen. Immer vor Publikum. Immer aus Bremen. Gemacht vom Bremer Presse-Club, Bremen Zwei und dem Weser-Kurier.",
    actors: fakeAPI.getRandomActors(),
    thumbnail: "assets/img/content_2.png",
    source: "path/to/source.mp3"
}, {
    id: 7,
    type: "audio",
    title: "Audio Item 2",
    station: 2,
    date: "03. April 2020",
    description: "Freiraum stellt klugen Menschen neugierige Fragen. Immer vor Publikum. Immer aus Bremen. Gemacht vom Bremer Presse-Club, Bremen Zwei und dem Weser-Kurier.",
    actors: fakeAPI.getRandomActors(),
    thumbnail: "assets/img/content_4.png",
    source: "path/to/source.mp3"
},];

// All stations the platform should support
fakeAPI.stations = [{
    id: 1,
    name: "Bremen Eins",
    color: "#00E676",
    logo: "/assets/img/stations/bremen_eins_light.svg",
    description: "Radio für Bremen, Bremerhaven und die Region. Mit den schönsten Oldies und den größten Hits aller Zeiten. Informativ und unterhaltsam, aktuell und hintergründig, regional und weltoffen, kompetent und nützlich, frisch und freundlich, ehrlich und lebensnah."
}, {
    id: 2,
    name: "Bremen Zwei",
    color: "#47418C",
    logo: "/assets/img/stations/bremen_zwei_light.svg",
    description: "Bremen Zwei, ein Programm von Radio Bremen, richtet sich an alle Freunde des informativen Kulturradios und der angenehmen, anspruchsvollen Musik."
}, {
    id: 3,
    name: "Bremen Vier",
    color: "#FFEB3B",
    logo: "/assets/img/stations/bremen_vier_light.svg",
    description: "Hier seid ihr ganz nah dran an Bremen Vier. Ihr wollt wissen, welche Dinge unsere Moderatoren mal lieber sein gelassen hätten? Ihr kennt ein cooles Event bei dem wir unbedingt einmal rumkommen müssen oder wollt selbst gerne einmal Radioluft schnuppern? Wie das alles geht und noch mehr findet ihr auf dieser Seite heraus."
}, {
    id: 4,
    name: "Bremen NEXT",
    color: "#03B1AB",
    logo: "/assets/img/stations/bremen_next_light.svg",
    description: "Bremen NEXT – das ist Musik und Lifestyle aus deiner Stadt. Wir bringen euch Black, Urban, Hip Hop und Electro im Radio auf 96,7 MHz in Bremen, auf 92,1 MHz in Bremerhaven und als Livestream im Netz und im Digitalradio. Wir sind für euch mit Kamera und Mic da, wo was geht – in Bremen, Bremerhaven und in der Welt. Bremen NEXT – ein Programm von Radio Bremen."
}, {
    id: 5,
    name: "Buten un Binnen",
    color: "#FF5722",
    logo: "/assets/img/stations/buten_un_binnen_light.svg",
    description: "buten un binnen ist das Regionalmagazin für Bremen, Bremerhaven und umzu im Internet und jeden Abend um 19:30 Uhr im Radio Bremen Fernsehen."
}];

// Returns all stations
fakeAPI.getStations = function() {
    return fakeAPI.stations;
}

// Returns a station for a specified ID
fakeAPI.fetchStation = function(id) {
    return fakeAPI.stations.find((elem) => {
        return elem.id == id;
    })
}

// Returns all media items
fakeAPI.getMedia = function() {
    return fakeAPI.media;
}

// Returns the media item for a specified ID
fakeAPI.fetchMedia = function(id) {
    return fakeAPI.media.find((elem) => {
        return elem.id == id;
    });
}

// Returns the media for a specified station
fakeAPI.getMediaForStation = function(station) {
    return fakeAPI.media.filter((elem) => {
        return elem.station == station.id
    });
}

// Returns the media for a specified type (video, audio, both)
fakeAPI.getMediaForType = function(type) {
    return fakeAPI.media.filter((elem) => {
        return (elem.type == "audio" && type == fakeAPI.contentType.AUDIO)
            || (elem.type == "video" && type == fakeAPI.contentType.VIDEO)
            || (type == fakeAPI.contentType.ALL);
    });
}

// Returns the media for a specified type and a specified station
fakeAPI.getMediaForStationAndType = function(station, type) {
    return fakeAPI.media.filter((elem) => {
        return ((elem.type == "audio" && type == fakeAPI.contentType.AUDIO
            || (elem.type == "video" && type == fakeAPI.contentType.VIDEO)
            || (type == fakeAPI.contentType.ALL))
            && elem.station == station.id);
    });   
}

// Returns a random media element
fakeAPI.randomMedia = function() {
    var randomIndex = Math.round(Math.random() * (fakeAPI.media.length - 1));
    return fakeAPI.media[randomIndex];
}

export default fakeAPI;
