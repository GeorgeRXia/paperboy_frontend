import React, { Component } from "react";
import nytimes from "./nytimes.png";

class Selector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed_id: this.props.feedId
        };
        this.selectSource = this.selectSource.bind(this);
    }
    render() {
        return (
            <div>
                <img
                    src={nytimes}
                    alt="newyorktimes"
                    id="1"
                    onClick={this.selectSource}
                />
            </div>
        );
    }
    selectSource(event) {
        var parseId = parseInt(event.target.id);
        console.log(this.state.feed_id);
        console.log(parseId);
    }
}
export default Selector;
