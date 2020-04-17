import React from 'react';
import { Link } from "react-router-dom";

import '../stylesheets/Feed/xs.css';
import '../stylesheets/Feed/small.css';
import '../stylesheets/Feed/medium.css';
import '../stylesheets/Feed/large.css';
import '../stylesheets/Feed/xl.css';

export default class Feed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    Title: "Mapping COVID-19 Cases by Country with React and D3",
                    Author: "Daniel Kawalsky",
                    CreatedOn: "April 12, 2020",
                    PostID: "how-to-map-covid-19-case-data",
                },
            ]
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="Feed">
                <h1>ARTICLES</h1>
                <div className="horizontal-bar" />
                {this.state.posts.map(post => (
                    <div className="feed-item" key={"key-" + post.PostID}>
                        <Link to={`/post/${post.PostID}`}>
                            <div className="feed-item-title">{post.Title}</div>
                            <div className="feed-item-author">by {post.Author}</div>
                            <div className="feed-item-createdOn">{post.CreatedOn}</div>
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

