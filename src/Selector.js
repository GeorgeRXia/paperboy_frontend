import React, { Component } from "react";
import nytimes from "./nytimes.png";
import guardian from "./gaurdian.svg";
import intercept from "./intercept.jpg";
import billpenn from "./billypenn.jpg";
import jacobin from "./jacobin.png";
import bbc from "./bbc.png";
import jazeera from "./jazeera.png";
import axios from "axios";
import "./selector.css";

class Selector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed_id: this.props.feedId,
            user_id: this.props.userId,
            source: []
        };
        this.selectSource = this.selectSource.bind(this);
        this.removeSource = this.removeSource.bind(this);
    }
    render() {
        // var selectedSource = [];
        // var unselectedSource = [];
        // this.source.map;
        return (
            <div className="selector_container">
                <div
                    className="selector_flexitem"
                    id="1"
                    onClick={this.selectSource}
                >
                    <img src={nytimes} alt="newyorktimes" id="1" />
                    <div className="textbox">
                        <p className="text">New York Times</p>
                        <p className="text2"> Click to Add </p>
                    </div>
                    <div
                        className="selector_remove"
                        id="1"
                        onClick={this.removeSource}
                    >
                        Remove Source
                    </div>
                </div>
                <div
                    className="selector_flexitem"
                    id="2"
                    onClick={this.selectSource}
                >
                    <img src={intercept} alt="intercept" id="2" />
                    <div className="textbox">
                        <p className="text">Intercept</p>
                        <p className="text2"> Click to Add </p>
                    </div>
                    <div
                        className="selector_remove"
                        id="2"
                        onClick={this.removeSource}
                    >
                        Remove Source
                    </div>
                </div>
                <div
                    className="selector_flexitem"
                    id="3"
                    onClick={this.selectSource}
                >

                    <img src={guardian} alt="gaurdian" id="3" />
                    <div className="textbox">
                        <p className="text">Guardian</p>
                        <p className="text2"> Click to Add </p>
                    </div>
                    <div
                        className="selector_remove"
                        id="3"
                        onClick={this.removeSource}
                    >
                        Remove Source
                    </div>
                </div>
                <div
                    className="selector_flexitem"
                    id="4"
                    onClick={this.selectSource}
                >
                    <img src={jacobin} alt="jacobin" id="4" />
                    <div className="textbox">
                        <p className="text">Jacobin</p>
                        <p className="text2"> Click to Add </p>
                    </div>
                    <div
                        className="selector_remove"
                        id="4"
                        onClick={this.removeSource}
                    >
                        Remove Source
                    </div>
                </div>
                <div
                    className="selector_flexitem"
                    id="5"
                    onClick={this.selectSource}
                >
                    <img src={billpenn} alt="billpenn" id="5" />
                    <div className="textbox">
                        <p className="text">Billpenn</p>
                        <p className="text2"> Click to Add </p>
                    </div>
                    <div
                        className="selector_remove"
                        id="5"
                        onClick={this.removeSource}
                    >
                        Remove Source
                    </div>
                </div>
                <div
                    className="selector_flexitem"
                    id="6"
                    onClick={this.selectSource}
                >
                    <img src={jazeera} alt="Al Jazeera America" id="6" />
                    <div className="textbox">
                        <p className="text">AL Jazeera America</p>
                        <p className="text2"> Click to Add </p>
                    </div>
                    <div
                        className="selector_remove"
                        id="6"
                        onClick={this.removeSource}
                    >
                        Remove Source
                    </div>
                </div>
                <div
                    className="selector_flexitem"
                    id="7"
                    onClick={this.selectSource}
                >
                    <img src={bbc} alt="BBC News" id="7" />
                    <div className="textbox">
                        <p className="text">BBC News</p>
                        <p className="text2"> Click to Add </p>
                    </div>
                    <div
                        className="selector_remove"
                        id="7"
                        onClick={this.removeSource}
                    >
                        Remove Source
                    </div>
                </div>
            </div>
        );
    }
    selectSource(event) {
        var parseId = parseInt(event.target.id);
        var feedId = this.state.feed_id;
        var userId = this.state.user_id;
        console.log(parseId);

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
        var parseId = event.target.id;
        var feedId = this.state.feed_id;
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
    componentWillMount() {
        var feedId = this.state.feed_id;

        axios
            .get("/chosensites", {
                params: {
                    feed_id: feedId
                }
            })
            .then(
                function(response) {
                    console.log(response.data);

                    var source = [
                        {
                            name: "New York Times",
                            selected: response.data.NewYorkTimes,
                            id: 1
                        },
                        {
                            name: "The Intercept",
                            selected: response.data.Intercept,
                            id: 2
                        },
                        {
                            name: "Guardian",
                            selected: response.data.Guardian,
                            id: 3
                        },
                        {
                            name: "Jacobin",
                            selected: response.data.Jacobin,
                            id: 4
                        },
                        {
                            name: "BillyPen",
                            selected: response.data.BillyPen,
                            id: 5
                        },
                        {
                            name: "Aljazeera",
                            selected: response.data.Aljazeera,
                            id: 6
                        },
                        {
                            name: "BBC",
                            selected: response.data.BBC,
                            id: 7
                        }
                    ];

                    this.setState({ sources: source });
                    console.log(this.state.sources);
                }.bind(this)
            );
    }
}
export default Selector;
