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
        var randomIndex = Math.round(Math.random() * fakeAPI.actors.length);
        actors.push(fakeAPI.actors[randomIndex]);
    }
    return actors;
}

// A random set of media entries, a real API would provide these
fakeAPI.media = [{
    id: 1,
    type: "video",
    title: "Test Item 1",
    station: "Bremen Vier",
    date: "03. April 2020",
    description: "Freiraum stellt klugen Menschen neugierige Fragen. Immer vor Publikum. Immer aus Bremen. Gemacht vom Bremer Presse-Club, Bremen Zwei und dem Weser-Kurier.",
    actors: fakeAPI.getRandomActors(),
    thumbnail: "assets/img/content_placeholder.png",
    source: "path/to/source.mp4"
}, {
    id: 2,
    type: "video",
    title: "Test Item 2",
    station: "Bremen Vier",
    date: "03. April 2020",
    description: "Freiraum stellt klugen Menschen neugierige Fragen. Immer vor Publikum. Immer aus Bremen. Gemacht vom Bremer Presse-Club, Bremen Zwei und dem Weser-Kurier.",
    actors: fakeAPI.getRandomActors(),
    thumbnail: "assets/img/content_placeholder.png",
    source: "path/to/source.mp4"
}, {
    id: 3,
    type: "video",
    title: "Test Item 3",
    station: "Bremen Vier",
    date: "03. April 2020",
    description: "Freiraum stellt klugen Menschen neugierige Fragen. Immer vor Publikum. Immer aus Bremen. Gemacht vom Bremer Presse-Club, Bremen Zwei und dem Weser-Kurier.",
    actors: fakeAPI.getRandomActors(),
    thumbnail: "assets/img/content_placeholder.png",
    source: "path/to/source.mp4"
}, {
    id: 4,
    type: "video",
    title: "Test Item 4",
    station: "Bremen Vier",
    date: "03. April 2020",
    description: "Freiraum stellt klugen Menschen neugierige Fragen. Immer vor Publikum. Immer aus Bremen. Gemacht vom Bremer Presse-Club, Bremen Zwei und dem Weser-Kurier.",
    actors: fakeAPI.getRandomActors(),
    thumbnail: "assets/img/content_placeholder.png",
    source: "path/to/source.mp4"
}, {
    id: 5,
    type: "video",
    title: "Test Item 5",
    station: "Bremen Vier",
    date: "03. April 2020",
    description: "Freiraum stellt klugen Menschen neugierige Fragen. Immer vor Publikum. Immer aus Bremen. Gemacht vom Bremer Presse-Club, Bremen Zwei und dem Weser-Kurier.",
    actors: fakeAPI.getRandomActors(),
    thumbnail: "assets/img/content_placeholder.png",
    source: "path/to/source.mp4"
}, {
    id: 6,
    type: "audio",
    title: "Audio Item",
    station: "Bremen Zwei",
    date: "03. April 2020",
    description: "Freiraum stellt klugen Menschen neugierige Fragen. Immer vor Publikum. Immer aus Bremen. Gemacht vom Bremer Presse-Club, Bremen Zwei und dem Weser-Kurier.",
    actors: fakeAPI.getRandomActors(),
    thumbnail: "assets/img/content_placeholder.png",
    source: "path/to/source.mp3"
}, {
    id: 7,
    type: "audio",
    title: "Audio Item 2",
    station: "Bremen Zwei",
    date: "03. April 2020",
    description: "Freiraum stellt klugen Menschen neugierige Fragen. Immer vor Publikum. Immer aus Bremen. Gemacht vom Bremer Presse-Club, Bremen Zwei und dem Weser-Kurier.",
    actors: fakeAPI.getRandomActors(),
    thumbnail: "assets/img/content_placeholder.png",
    source: "path/to/source.mp3"
},];

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

// Returns a random media element
fakeAPI.randomMedia = function() {
    var randomIndex = Math.round(Math.random() * (fakeAPI.media.length - 1));
    return fakeAPI.media[randomIndex];
}

export default fakeAPI;
