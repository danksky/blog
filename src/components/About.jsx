import React from 'react';

import '../stylesheets/About/xl.css';

export default class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="About">
                <h1>ABOUT</h1>
                <div className="horizontal-bar" />
                <h2>It's a code blog.</h2>
                <p>
                    My latest programming finds, curiosities, and projects will
                    be found here. Refer to my <a href="https://danielkawalsky.com">personal website</a>
                    for my other work and ideas.
                </p>
                <h2>There are ads.</h2>
                <p>
                    I keep ads on my code blog—and ask you to turn off your code
                    blocker—because ads bring in revenue. The money goes to
                    me—but I don't keep it long. Every cent I gather while your
                    ad blocker is off will be donated to a charity I care about.
                </p>
            </div>
        );
    }
}

