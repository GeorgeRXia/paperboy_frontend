import React, { Component } from "react";
import nytimes from "./nytimes.png";
import axios from "axios";

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
        var feedId = this.state.feed_id;
        axios
            .post("/chosensites", {
                data: {
                    feed_id: feedId,
                    newssite_id: parseId
                }
            })
            .then(function(response) {
                console.log(response);
            });
    }
}
export default Selector;
