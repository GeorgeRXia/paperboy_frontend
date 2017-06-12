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
        var newSite = this.state.userArticles.map(function(newsite) {
            return newsite.articles;
        });
        console.log(newSite);
        var articles = newSite.map(function(article) {
            return article.article;
        });
        console.log(articles);
        var articlesDivs = articles.map(function(article) {
            return <div>{article.title}</div>;
        });
        return <div>{articlesDivs}</div>;
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
                    console.log(response);
                    this.setState({ userArticles: response.data });
                }.bind(this)
            );
    }
}
export default NewsFeed;
