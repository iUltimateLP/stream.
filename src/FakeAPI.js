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

fakeAPI.getMedia = function() {
    return [{
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
    }];
}

export default fakeAPI;