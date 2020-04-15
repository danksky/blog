import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import '../stylesheets/TopBar/xs.css';
import '../stylesheets/TopBar/small.css';
import '../stylesheets/TopBar/medium.css';
import '../stylesheets/TopBar/large.css';
import '../stylesheets/TopBar/xl.css';

export default class TopBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
        };

        this.menuButtonAnchorRef = React.createRef();
        this.handleToggle = this.handleToggle.bind(this);
        this.handleListKeyDown = this.handleListKeyDown.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleToggle(event) {
        event.preventDefault();
        this.setState((prevState) => {
            return {
                menuOpen: !prevState.menuOpen,
            };
        })
    }

    handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            this.setState({
                menuOpen: false,
            });
        }
    }

    handleClose(event) {
        event.preventDefault();
        this.setState({
            menuOpen: false,
        });
    };

    componentDidMount() {

    }

    render() {
        return (
            <div className="TopBar">
                <div className="top-bar-content">
                    <div className="top-bar-icon">
                        <Link to="/">
                            <img src={require('../media/image/face.png')} alt="face icon" />
                        </Link>
                    </div>
                    <div className="top-bar-title">
                        <Link to="/">
                            <Button className="top-bar-title-button-label">DANIEL KAWALSKY</Button>
                        </Link>
                    </div>
                    <div className="top-bar-button-menuButton"
                        onClick={this.handleToggle}
                        ref={this.menuButtonAnchorRef}>
                        <Button className="top-bar-button-menuButton-button-label">☰</Button>
                    </div>
                    <Popper open={this.state.menuOpen} anchorEl={this.menuButtonAnchorRef.current} role={undefined} transition disablePortal>
                        {/* Expect this to throw a deprecation error */}
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={this.handleClose}>
                                        <MenuList autoFocusItem={this.state.menuOpen} id="menu-list-grow" onKeyDown={this.handleListKeyDown}>
                                            <MenuItem className="top-bar-menu-item" onClick={this.handleClose}><Link to="/about">ABOUT</Link></MenuItem>
                                            <MenuItem onClick={this.handleClose}><Link to="/">HOME</Link></MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
        );
    }
}

