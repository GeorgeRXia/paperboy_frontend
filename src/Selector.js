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
            newYorkTimes: false,
            intercept: false,
            guardian: false,
            jacobin: false,
            billyPen: false,
            aljazeera: false,
            bbc: false
        };
        this.selectSource = this.selectSource.bind(this);
        this.removeSource = this.removeSource.bind(this);
    }
    render() {
        return (
            <div>
                <div className="selector_container">

                    <div className="selector_img1">
                        <img
                            src={intercept}
                            alt="intercept"
                            id="2"
                            onClick={this.selectSource}
                        />
                        <div id="2" onClick={this.removeSource}>
                            Remove Source
                        </div>
                    </div>
                    <div className="selector_img1">

                        <img
                            src={guardian}
                            alt="gaurdian"
                            id="3"
                            onClick={this.selectSource}
                        />
                        <div id="3" onClick={this.removeSource}>
                            Remove Source
                        </div>
                    </div>
                    <div className="selector_img1">
                        <img
                            src={jacobin}
                            alt="jacobin"
                            id="4"
                            onClick={this.selectSource}
                        />
                        <div id="4" onClick={this.removeSource}>
                            Remove Source
                        </div>
                    </div>
                    <div className="selector_img1">
                        <img
                            src={billpenn}
                            alt="billpenn"
                            id="5"
                            onClick={this.selectSource}
                        />
                        <div id="5" onClick={this.removeSource}>
                            Remove Source
                        </div>
                    </div>
                    <div className="selector_img1">
                        <img
                            src={jazeera}
                            alt="Al Jazeera America"
                            id="6"
                            onClick={this.selectSource}
                        />
                        <div id="6" onClick={this.removeSource}>
                            Remove Source
                        </div>
                    </div>
                    <div className="selector_img1">
                        <img
                            src={bbc}
                            alt="BBC News"
                            id="7"
                            onClick={this.selectSource}
                        />
                        <div id="7" onClick={this.removeSource}>
                            Remove Source
                        </div>
                    </div>
                </div>
                <div className="unSelected" />
            </div>
        );
        if (this.state.newYorkTimes === true) {
            var selected = document.getElementsByClassName(
                "selector_container"
            )[0];
            selected.innerHTML += (
                <div className="selector_img1">
                    <img
                        src={nytimes}
                        alt="newyorktimes"
                        id="1"
                        onClick={this.selectSource}
                    />
                    <div id="1" onClick={this.removeSource}>
                        Remove Source
                    </div>
                </div>
            );
        } else {
            var unSelected = document.getElementsByClassName("unSelected")[0];
            unSelected.innerHTML += (
                <div className="selector_img1">
                    <img
                        src={nytimes}
                        alt="newyorktimes"
                        id="1"
                        onClick={this.selectSource}
                    />
                    <div id="1" onClick={this.removeSource}>
                        Remove Source
                    </div>
                </div>
            );
        }
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
                    this.setState({ newYorkTimes: response.data.NewYorkTimes });
                    this.setState({ intercept: response.data.Intercept });
                    this.setState({ guardian: response.data.Guardian });
                    this.setState({ jacobin: response.data.Jacobin });
                    this.setState({ billyPen: response.data.BillyPen });
                    this.setState({ aljazeera: response.data.Aljazeera });
                    this.setState({ bbc: response.data.Bbc });
                }.bind(this)
            );
    }
}
export default Selector;
