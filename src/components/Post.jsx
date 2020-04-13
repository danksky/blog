import React from 'react';
import ReactMarkdown from 'react-markdown';
import PostCodeBlock from "./PostCodeBlock";

import '../stylesheets/Post/xl.css';

import blogEntry from '../BLOG_ENTRY.md';

export default class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
        fetch(blogEntry).then(res => res.text()).then(text => this.setState({ markdown: text }));
    }

    render() {
        return (
            <div className="Post">
                <ReactMarkdown
                    source={this.state.markdown}
                    renderers={{ code: PostCodeBlock }}
                />
            </div>
        );
    }
}

