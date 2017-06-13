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
            feed_id: this.props.feedId,
            user_id: this.props.userId
        };
        this.selectSource = this.selectSource.bind(this);
        this.removeSource = this.removeSource.bind(this);
    }
    render() {
        return (
            <div>
                <div>
                    <img
                        src={nytimes}
                        alt="newyorktimes"
                        id="1"
                        onClick={this.selectSource}
                    />
                    <div id="1" onClick={this.removeSource}>Remove Source</div>
                </div>
                <div>
                    <img
                        src={intercept}
                        alt="intercept"
                        id="2"
                        onClick={this.selectSource}
                    />
                    <div id="2" onClick={this.removeSource}>Remove Source</div>
                </div>
                <div>

                    <img
                        src={guardian}
                        alt="gaurdian"
                        id="3"
                        onClick={this.selectSource}
                    />
                    <div id="3" onClick={this.removeSource}>Remove Source</div>
                </div>
                <div>
                    <img
                        src={jacobin}
                        alt="jacobin"
                        id="4"
                        onClick={this.selectSource}
                    />
                    <div id="4" onClick={this.removeSource}>Remove Source</div>
                </div>
                <div>
                    <img
                        src={billpenn}
                        alt="billpenn"
                        id="5"
                        onClick={this.selectSource}
                    />
                    <div id="5" onClick={this.removeSource}>Remove Source</div>
                </div>
            </div>
        );
    }
    selectSource(event) {
        var parseId = parseInt(event.target.id);
        var feedId = this.state.feed_id;
        var userId = this.state.user_id;

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
    removeSource(event) {
        var parseId = parseInt(event.target.id);
        var alt = event.target.alt;
        var feedId = this.state.feed_id;
        var userId = this.state.user_id;
        axios
            .delete("/chosensites/1", {
                data: {
                    feed_id: feedId,
                    newssite_id: parseId
                }
            })
            .then(function(response) {
                console.log(response);
                alert("You have removed your source");
            });
    }
}
export default Selector;
