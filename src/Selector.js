import React, { Component } from "react";
import nytimes from "./nytimes.png";
import guardian from "./gaurdian.svg";
import intercept from "./intercept.jpg";
import billpenn from "./billypenn.jpg";
import jacobin from "./jacobin.png";
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
                <img
                    src={intercept}
                    alt="intercept"
                    id="2"
                    onClick={this.selectSource}
                />
                <img
                    src={guardian}
                    alt="gaurdian"
                    id="3"
                    onClick={this.selectSource}
                />
                <img
                    src={jacobin}
                    alt="jacobin"
                    id="4"
                    onClick={this.selectSource}
                />
                <img
                    src={billpenn}
                    alt="billpenn"
                    id="5"
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
