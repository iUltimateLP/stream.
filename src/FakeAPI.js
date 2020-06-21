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

fakeAPI.media = [{
    id: 1,
    type: "video",
    title: "Test Item 1",
    station: "Bremen Vier",
    date: "03. April 2020",
    description: "Freiraum stellt klugen Menschen neugierige Fragen. Immer vor Publikum. Immer aus Bremen. Gemacht vom Bremer Presse-Club, Bremen Zwei und dem Weser-Kurier.",
    actors: [{
        short: "EM'B",
        long: "Elyas M' Barek"
    }, {
        short: "JV",
        long: "Jonathan Verbeek"
    }, {
        short: "DB",
        long: "David Bollmann"
    }],
    thumbnail: "assets/img/content_placeholder.png",
    source: "path/to/source.mp4"
}, {
    id: 2,
    type: "video",
    title: "Test Item 2",
    station: "Bremen Vier",
    date: "03. April 2020",
    description: "Freiraum stellt klugen Menschen neugierige Fragen. Immer vor Publikum. Immer aus Bremen. Gemacht vom Bremer Presse-Club, Bremen Zwei und dem Weser-Kurier.",
    actors: [{
        short: "EM'B",
        long: "Elyas M' Barek"
    }, {
        short: "JV",
        long: "Jonathan Verbeek"
    }, {
        short: "DB",
        long: "David Bollmann"
    }],
    thumbnail: "assets/img/content_placeholder.png",
    source: "path/to/source.mp4"
}, {
    id: 3,
    type: "video",
    title: "Test Item 3",
    station: "Bremen Vier",
    date: "03. April 2020",
    description: "Freiraum stellt klugen Menschen neugierige Fragen. Immer vor Publikum. Immer aus Bremen. Gemacht vom Bremer Presse-Club, Bremen Zwei und dem Weser-Kurier.",
    actors: [{
        short: "EM'B",
        long: "Elyas M' Barek"
    }, {
        short: "JV",
        long: "Jonathan Verbeek"
    }, {
        short: "DB",
        long: "David Bollmann"
    }],
    thumbnail: "assets/img/content_placeholder.png",
    source: "path/to/source.mp4"
}, {
    id: 4,
    type: "video",
    title: "Test Item 4",
    station: "Bremen Vier",
    date: "03. April 2020",
    description: "Freiraum stellt klugen Menschen neugierige Fragen. Immer vor Publikum. Immer aus Bremen. Gemacht vom Bremer Presse-Club, Bremen Zwei und dem Weser-Kurier.",
    actors: [{
        short: "EM'B",
        long: "Elyas M' Barek"
    }, {
        short: "JV",
        long: "Jonathan Verbeek"
    }, {
        short: "DB",
        long: "David Bollmann"
    }],
    thumbnail: "assets/img/content_placeholder.png",
    source: "path/to/source.mp4"
}, {
    id: 5,
    type: "video",
    title: "Test Item 5",
    station: "Bremen Vier",
    date: "03. April 2020",
    description: "Freiraum stellt klugen Menschen neugierige Fragen. Immer vor Publikum. Immer aus Bremen. Gemacht vom Bremer Presse-Club, Bremen Zwei und dem Weser-Kurier.",
    actors: [{
        short: "EM'B",
        long: "Elyas M' Barek"
    }, {
        short: "JV",
        long: "Jonathan Verbeek"
    }, {
        short: "DB",
        long: "David Bollmann"
    }],
    thumbnail: "assets/img/content_placeholder.png",
    source: "path/to/source.mp4"
},];

fakeAPI.getMedia = function() {
    return fakeAPI.media;
}

fakeAPI.fetchMedia = function(id) {
    return fakeAPI.media.find((elem) => {
        return elem.id == id;
    });
}

export default fakeAPI;