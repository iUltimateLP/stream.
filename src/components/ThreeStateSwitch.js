/*
	 	   _                                         
	 ___  | |_   _ __    ___    __ _   _ __ ___      
	/ __| | __| | '__|  / _ \  / _` | | '_ ` _ \     
	\__ \ | |_  | |    |  __/ | (_| | | | | | | |  _ 
	|___/  \__| |_|     \___|  \__,_| |_| |_| |_| (_)
													
	Created by David Bollmann and Jonathan Verbeek (jverbeek.de)
	Hochschule Bremen City University of Applied Sciences
*/

// ThreeStateSwitch.js: A React reusable component which acts as a switch which can have
//                      three states (left, middle, right)

import React from 'react';
import './ThreeStateSwitch.css';

class ThreeStateSwitch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            switchState: props.initialState
        };
    }

    onHandleClicked() {
        var newState = (this.state.switchState + 1) % 3;

        this.setState({
            switchState: newState
        });

        if (this.props.onStateChange) {
            this.props.onStateChange(newState);
        }
    }

    getHandleOffset() {
        return (this.state.switchState * 12) + "px";
    }

    getState() {
        return this.state.switchState;
    }

    render() {
        return (
            <div className={"three-switch-container"} onClick={() => this.onHandleClicked()}>
                <div className={"handle"} style={{"marginLeft": this.getHandleOffset()}}></div>
            </div>
        );
    }
}

export default ThreeStateSwitch;
