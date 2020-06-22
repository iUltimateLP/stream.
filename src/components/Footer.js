/*
	 	   _                                         
	 ___  | |_   _ __    ___    __ _   _ __ ___      
	/ __| | __| | '__|  / _ \  / _` | | '_ ` _ \     
	\__ \ | |_  | |    |  __/ | (_| | | | | | | |  _ 
	|___/  \__| |_|     \___|  \__,_| |_| |_| |_| (_)
													
	Created by David Bollmann and Jonathan Verbeek (jverbeek.de)
	Hochschule Bremen City University of Applied Sciences
*/

// Footer.js: The footer for the web page

import React from 'react'

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"footer"}>
                <div className={"footer-grid"}>
                    <div className={"rb-logo"}>
                        <img src="assets/img/rb_logo.svg"></img>
                        <div>
                            <a href="#"><i className={"fa fa-facebook"}></i></a>
                            <a href="#"><i className={"fa fa-twitter"}></i></a>
                            <a href="#"><i className={"fa fa-instagram"}></i></a>
                        </div>
                    </div>
                    <div>
                        <a href="https://www.radiobremen.de/datenschutzerklaerung100.html" target="_blank">Datenschutz</a>
                    </div>
                    <div>
                        <a href="https://www.radiobremen.de/unternehmen/kontakt/impressum100.html" target="_blank">Impressum</a>
                    </div>
                    <div>
                        <a href="#">Newsletter</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
