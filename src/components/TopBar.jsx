import React from 'react';

import '../stylesheets/TopBar/xl.css';

export default class TopBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="TopBar">
                <div className="top-bar-content">
                    <div className="top-bar-icon">
                        <img src={require('../media/image/face.png')} />
                    </div>
                    <div className="top-bar-title">DANIEL KAWALSKY</div>
                    <div className="top-bar-buttons">
                        <div className="top-bar-button-about">ABOUT</div>
                        <div className="top-bar-button-contact">CONTACT</div>
                    </div>
                </div>
            </div>
        );
    }
}

