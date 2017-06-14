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
            sources: []
        };
        this.selectSource = this.selectSource.bind(this);
        this.removeSource = this.removeSource.bind(this);
    }
    render() {
        var selectedSource = [];
        var unselectedSource = [];
        this.state.sources.map(function(source) {
            if (source.selected === true) {
                selectedSource.push(source);
            } else {
                unselectedSource.push(source);
            }
        });
        console.log(selectedSource);
        console.log(unselectedSource);

        var selectedDiv = selectedSource.map(
            function(source) {
                return (
                    <div
                        className="selector_flexitem"
                        onClick={this.selectSource}
                        id={source.id}
                    >
                        <img
                            src={source.picture}
                            alt={source.name}
                            id={source.id}
                        />
                        <div className="textbox" id={source.id}>
                            <p className="text" id={source.id}>{source.name}</p>
                            <p className="text2" id={source.id}>
                                {" "}Click to Add{" "}
                            </p>
                        </div>
                        <div
                            className="selector_remove"
                            id={source.id}
                            onClick={this.removeSource}
                        >
                            Remove Source
                        </div>
                    </div>
                );
            }.bind(this)
        );
        var unSelectedDiv = unselectedSource.map(
            function(source) {
                return (
                    <div
                        className="selector_flexitem"
                        onClick={this.selectSource}
                        id={source.id}
                    >
                        <img
                            src={source.picture}
                            alt={source.name}
                            id={source.id}
                        />
                        <div className="textbox" id={source.id}>
                            <p className="text" id={source.id}>{source.name}</p>
                            <p className="text2" id={source.id}>
                                {" "}Click to Add{" "}
                            </p>
                        </div>
                        <div
                            className="selector_remove"
                            id={source.id}
                            onClick={this.removeSource}
                        >
                            Remove Source
                        </div>
                    </div>
                );
            }.bind(this)
        );

        return (
            <div className="selector_container">
                <div>Selected Sites:</div>
                <div>{selectedDiv}</div>
                <div>Unselected Sites:</div>
                <div>{unSelectedDiv}</div>
            </div>
        );
    }
    selectSource(event) {
        var parseId = parseInt(event.target.id);
        var feedId = this.state.feed_id;
        var userId = this.state.user_id;
        console.log(parseId);
        console.log(userId);

        console.log(event.target.id);

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
                            id: 1,
                            picture: nytimes
                        },
                        {
                            name: "The Intercept",
                            selected: response.data.Intercept,
                            id: 2,
                            picture: intercept
                        },
                        {
                            name: "Guardian",
                            selected: response.data.Guardian,
                            id: 3,
                            picture: guardian
                        },
                        {
                            name: "Jacobin",
                            selected: response.data.Jacobin,
                            id: 4,
                            picture: jacobin
                        },
                        {
                            name: "Billy Pen",
                            selected: response.data.BillyPen,
                            id: 5,
                            picture: billpenn
                        },
                        {
                            name: "Aljazeera",
                            selected: response.data.Aljazeera,
                            id: 6,
                            picture: jazeera
                        },
                        {
                            name: "BBC",
                            selected: response.data.BBC,
                            id: 7,
                            picture: bbc
                        }
                    ];

                    this.setState({ sources: source });
                    console.log(this.state.sources);
                }.bind(this)
            );
    }
}
export default Selector;
