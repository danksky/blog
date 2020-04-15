import React from 'react';

import '../stylesheets/Footer/xs.css';
import '../stylesheets/Footer/small.css';
import '../stylesheets/Footer/medium.css';
import '../stylesheets/Footer/large.css';
import '../stylesheets/Footer/xl.css';

export default class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="Footer">
                <div className="footer-copyright">© Daniel Kawalsky 2019-2020.</div>
                <div className="footer-socialMedia">
                    <div className="footer-socialMedia-icon">
                        <a href="https://github.com/danksky"><img src={require("../media/icon/github.svg")} alt="github" /></a>
                    </div>
                    <div className="footer-socialMedia-icon">
                        <a href="https://www.linkedin.com/in/daniel-kawalsky/"><img src={require("../media/icon/linkedin.svg")} alt="linkedin" /></a>
                    </div>
                    <div className="footer-socialMedia-icon">
                        <a href="mailto:hello@danielkawalsky.com" target="_"><img src={require("../media/icon/email.svg")} alt="email" /></a>
                    </div>
                </div>
            </div>
        );
    }
}

