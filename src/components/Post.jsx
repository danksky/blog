import React from 'react';
import ReactMarkdown from 'react-markdown';
import PostCodeBlock from "./PostCodeBlock";

import '../stylesheets/Post/xl.css';

import post0 from '../media/post/HOW_TO_MAP_COVID.md';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            posts: {
                "how-to-map-covid-19-case-data": post0,
            },
        };
    }

    componentDidMount() {
        // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
        let postId = null;
        let post = null;
        console.log(this.props.match)
        if (this.props.match && this.props.match.params && this.props.match.params.postId)
            postId = this.props.match.params.postId;
        if (postId != null)
            post = this.state.posts[postId];
        if (post != null)
            fetch(post).then(res => res.text()).then(text => {
                this.setState({
                    markdown: text,
                    loading: false,
                });
            });
        else
            this.setState({
                loading: false,
            });
    }

    render() {
        return (
            <div className="Post">
                {this.state.loading ?
                    <div>LOADING TODO</div>
                    :
                    (this.state.markdown ?
                        <ReactMarkdown
                            source={this.state.markdown}
                            renderers={{ code: PostCodeBlock }}
                        />
                        :
                        "Sorry, there is no post here. TODO."
                    )
                }

            </div>
        );
    }
}

