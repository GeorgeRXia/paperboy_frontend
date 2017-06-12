import React, { Component } from "react";
import axios from "axios";

class SignIn extends Component {
    constructor(props) {
        super(props);
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
                <input onChange={this.setUserName} placeholder="username" />
                <input onChange={this.setPassword} placeholder="password" />
                <button onClick={this.logIn}> Log In </button>
                <h2> Or Create Account </h2>
                <input onChange={this.setUserName} placeholder="username" />
                <input onChange={this.setPassword} placeholder="password" />
                <button onClick={this.createAccount}> Create Account </button>
            </div>
        );
    }
    setUserName(event) {
        this.setState({ username: event.target.value });
    }
    setPassword(event) {
        this.setState({ password: event.target.value });
    }
    logIn() {
        axios
            .get("/users", {
                params: {
                    username: this.state.username,
                    password: this.state.password
                }
            })
            .then(
                function(response) {
                    console.log(response);
                    console.log(response.data.views);
                    console.log(response.data.user_id);

                    this.props.logInFunction(
                        response.data.views,
                        response.data.user_id
                    );
                }.bind(this)
            );
    }
    createAccount() {
        axios
            .post("/users", {
                data: {
                    username: this.state.username,
                    password: this.state.password
                }
            })
            .then(
                function(response) {
                    console.log(response);

                    this.props.logInFunction(
                        response.data.views,
                        response.data.user_id
                    );
                }.bind(this)
            );
    }
}
export default SignIn;
