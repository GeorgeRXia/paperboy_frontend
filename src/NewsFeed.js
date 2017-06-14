import React, { Component } from "react";
import axios from "axios";
import "./NewsFeed.css";

class NewsFeed extends Component {
    constructor() {
        super();
        this.state = {
            userArticles: []
        };
    }
    render() {
        var sortedArticles = this.state.userArticles.sort(function(a, b) {
            a = new Date(a.date);
            b = new Date(b.date);
            return a > b ? -1 : a < b ? 1 : 0;
        });
        console.log(sortedArticles);
        var Response = sortedArticles
            .slice(0, 30)
            .map(function(articles, index) {
                return (
                    <div className="articleContainer">
                        <div className="articleDiv" key={index}>
                            <div className="articleTitle">
                                {articles.title}
                            </div>
                            {" "}
                            <div className="articleAuthor">
                                {articles.author}
                            </div>
                            <div className="articleContent">
                                {articles.content}
                            </div>
                            <div className="articleUrl">
                                {" "}{articles.url}
                                {" "}
                            </div>
                        </div>
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
