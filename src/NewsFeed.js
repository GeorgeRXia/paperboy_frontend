import React, { Component } from "react";
import axios from "axios";
import "/newfeed.css";

class NewsFeed extends Component {
    constructor() {
        super();
        this.state = {
            userArticles: []
        };
    }
    render() {
        var Response = this.state.userArticles.map(function(articles, index) {
            console.log(articles);
            return (
                <div className="articleDiv" key={index}>
                    <div className="articleTitle">{articles.title}</div>
                    <div className="articleAuthor">{articles.author}</div>
                    <div className="articleContent">{articles.content}</div>
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
