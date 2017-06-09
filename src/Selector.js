import React, { Component } from "react";
import nytimes from "./nytimes.png";

class Selector extends Component {
    constructor(props) {
        super(props);
        this.setNyTimesState = this.setNyTimesState.bind(this);
    }
    render() {
        return (
            <div>
                <img src={nytimes} onClick={this.setNyTimesState} />
            </div>
        );
    }
    setNyTimesState() {
        this.props.nytimesFunction(true);
    }
}
export default Selector;
