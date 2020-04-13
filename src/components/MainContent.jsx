import React from 'react';
import { Switch, Route } from "react-router-dom";

import About from './About';
import Contact from './Contact';
import Feed from './Feed';
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
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/post/:postId" component={Post} />
                    <Route path="/">
                        <Feed />
                    </Route>
                </Switch>
            </div>
        );
    }
}