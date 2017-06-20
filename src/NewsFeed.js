import React, { Component } from "react";
import axios from "axios";
import "./NewsFeed.css";
import dateFormat from 'dateformat'

class NewsFeed extends Component {
    constructor() {
        super();
        this.state = {
            userArticles: []
        };
        console.log(this.state.userArticles);
    }
    render() {

      var sortedArticles = this.state.userArticles.sort(function(a, b) {
          a = new Date(a.date);
          b = new Date(b.date);
          return a>b ? -1 : a<b ? 1 : 0;

      });
      console.log(sortedArticles);
        var Response = sortedArticles.slice(0, 30).map(function(articles, index) {
            return (

                <div key={index}>
                    <div>{articles.newssite_id}</div>
                    <div>{articles.title}</div>
                    <div>{articles.author}</div>
                    <div>{articles.content}</div>
                </div>
            );


            });
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
                            <div>{dateFormat(articles.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</div>
                            <div className="articleContent">
                                {articles.content}
                            </div>
                            <div className="articleUrl">
                                {" "}<a href={articles.url}>{articles.url} </a>
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
            .get("http://papperboi.herokuapp.com/feeds", {
                params: {
                    feed_id: this.props.feedId
                }
            })
            .then(
                function(response) {
                    console.log(response);
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
