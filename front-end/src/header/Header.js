import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
  render() {
    return (
            <nav className="navbar" id="header">
                Project Board
                <div className="dropdown" id="menu">
                    <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                    Menu <span className="caret"></span>
                    </button>

                    <ul className="dropdown-menu dropdown-menu-right">
                        <li>Home</li>
                        <li>Songs</li>
                        <li>Choreographers</li>
                        <li>Teams</li>
                    </ul>                    
                </div>
            </nav>
    );
  }
}

export default Header;
