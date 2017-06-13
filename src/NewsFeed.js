import React, { Component } from "react";
import axios from "axios";

class NewsFeed extends Component {
    constructor() {
        super();
        this.state = {
            userArticles: []
        };
    }
    render() {
        var Response = this.state.userArticles.map(function(articles, index) {
            return (
                <div key={index}>
                    <div>{articles.title}</div>
                    <div>{articles.author}</div>
                    <div>{articles.content}</div>
                </div>
            );
        });
        return <div>{Response}</div>;
    }
    componentWillMount() {
        axios
            .get("/feeds", {
                params: {
                    feed_id: this.props.feedId
                }
            })
            .then(
                function(response) {
                    var Responsemapped = [];
                    response.data.map(function(articles) {
                        return articles.articles.map(function(articles) {
                            return Responsemapped.push(articles);
                        });
                    });
                    this.setState({ userArticles: Responsemapped });
                }.bind(this)
            );
    }
}
export default NewsFeed;
