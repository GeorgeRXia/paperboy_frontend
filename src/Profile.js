import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./profile.css";
import Selector from "./Selector";
import NewsFeed from "./NewsFeed";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nytimes: false,
            intercept: false
        };
        this.displaySelector = this.setNyTimesState.bind(this);
        this.displaySelector = this.displaySelector.bind(this);
        this.displayNewsFeed = this.displayNewsFeed.bind(this);
    }
    render() {
        return (
            <div className="profile-div">
                <BrowserRouter>
                    <div>
                        <h1>PaperBoy News</h1>
                        <label>
                            Choose Your News:<Link to="/selector">Select</Link>
                        </label>
                        <label>
                            Go to Feed:<Link to="/newssites"> News</Link>
                        </label>
                        <Route
                            path="/selector"
                            component={this.displaySelector}
                        />
                        <Route
                            path="/newssites"
                            component={this.displayNewsFeed}
                        />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
    setNyTimesState(argument) {
        if (this.state.nytimes === true) {
            this.setState({ nytimes: false });
        } else {
            this.setState({ nytimes: argument });
        }
    }
    displaySelector() {
        return (
            <Selector
                nytimesFunction={this.setNyTimesState}
                interceptFunction={this.setInterceptState}
            />
        );
    }
    displayNewsFeed() {
        return (
            <NewsFeed
                nytimes={this.state.nytimes}
                intercept={this.state.intercept}
            />
        );
    }
}

export default Profile;
