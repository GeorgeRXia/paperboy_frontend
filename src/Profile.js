import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./profile.css";
import Selector from "./Selector";
import NewsFeed from "./NewsFeed";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed_id: this.props.feedId
        };

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
    displaySelector() {
        return <Selector feedId={this.state.feed_id} />;
    }
    displayNewsFeed() {
        return <NewsFeed feedId={this.state.feed_id} />;
    }
}

export default Profile;
