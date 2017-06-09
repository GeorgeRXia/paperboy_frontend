import React, { Component } from "react";

class SignIn extends Component {
    constructor() {
        this.state = {
            username: "",
            password: ""
        };
        this.setUserName = this.setUserName.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.logIn = this.logIn.bind(this);
        this.createAccount = this.createAccount.bind(this);
    }
    render() {
        return (
            <div className="SignIn-main">
                <h1>Welcome to PaperBoy</h1>
                <h2>Please Sign In</h2>
                <input onChange={this.setUsername} placeholder="username" />
                <input onChange={this.setPassword} placeholder="password" />
                <button onClick={this.logIn}> Log In </button>
                <h2> Or Create Account </h2>
                <input onChange={this.setUsername} placeholder="username" />
                <input onChange={this.setPassword} placeholder="password" />
                <button onClick={this.createAccount}> Create Account </button>
            </div>
        );
    }
    setUsername(event) {
        this.setState({ username: event.target.value });
    }
    setPassword(event) {
        this.setState({ password: event.target.value });
    }
}
