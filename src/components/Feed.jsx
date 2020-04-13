import React from 'react';

import '../stylesheets/Feed/xl.css';

export default class Feed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    Title: "How to Map Covid-19 Case Data",
                    Author: "Daniel Kawalsky",
                    CreatedOn: "April 12, 2020",
                    PostID: "how-to-map-covid-19-case-data",
                }
            ]
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="Feed">
                FEED PAGE:
                <hr />
                {this.state.posts.map(post => (
                    <div className="feed-item"
                        onClick={() => console.log("This should link to post with ID: " + post.PostID)}
                        key={"key-" + post.PostID}>
                        <strong>{post.Title}</strong> by {post.Author} <br />
                        {post.CreatedOn}
                    </div>
                ))}
            </div>
        );
    }
}

