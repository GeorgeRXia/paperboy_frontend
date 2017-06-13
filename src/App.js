import React, { Component } from "react";
import "./App.css";
import SignIn from "./SignIn";
import Profile from "./Profile";
import axios from "axios";

class App extends Component {
    constructor() {
        super();
        this.state = {
            LogIn: false,
            user_id: 0,
            feed_id: 0
        };
        this.setLogIn = this.setLogIn.bind(this);
    }
    render() {
        if (this.state.LogIn === false) {
            return <SignIn logInFunction={this.setLogIn} />;
        } else {
            return (
                <Profile
                    userid={this.state.user_id}
                    feedId={this.state.feed_id}
                />
            );
        }
    }
    setLogIn(passedLogin, userid, feed_id) {
        this.setState({
            LogIn: passedLogin,
            user_id: userid,
            feed_id: feed_id
        });
    }

    componentDidMount() {
        axios
            .get(
                "https://newsapi.org/v1/articles?source=the-guardian-uk&sortBy=top&apiKey=2706fd9fb9f646c8bb8d9bd8912d7123"
            )
            .then(function(response) {
                console.log(response.data);
                axios.post("/articles", {
                    guardian: response.data
                });
            });
    }
}

export default App;
