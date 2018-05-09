import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
  render() {
    return (
		<div className="Header">
			<nav class="navbar">
				Project Board
				<div className="dropdown">
					<button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown">
					Menu <span className="caret"></span>
					</button>

					
					
				</div>
			</nav>
		</div>
    );
  }
}

export default Header;
