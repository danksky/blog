import React from 'react';

import Post from './Post';

import '../stylesheets/MainContent/xl.css';

export default class MainContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="MainContent">
                <Post />
            </div>
        );
    }
}