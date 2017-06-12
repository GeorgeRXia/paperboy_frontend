import React, { Component } from "react";
import "./App.css";
import SignIn from "./SignIn";
import Profile from "./Profile";

class App extends Component {
    constructor() {
        super();
        this.state = {
            LogIn: false,
            user_id: 0
        };
        this.setLogIn = this.setLogIn.bind(this);
    }
    render() {
        if (this.state.LogIn === false) {
            return <SignIn logInFunction={this.setLogIn} />;
        } else {
            return <Profile userid={this.state.user_id} />;
        }
    }
    setLogIn(passedLogin, userid) {
        this.setState({ LogIn: passedLogin, user_id: userid });
    }
}

export default App;
