import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./profile.css";

class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="profile-div">
                <BrowserRouter>
                    <div>
                        <h1>PaperBoy News</h1>
                        <label>
                            Choose Your News:
                        </label>
                        <label>
                            Go to Feed:
                        </label>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Profile;
