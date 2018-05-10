import React, { Component } from 'react';
import './Directory.css';


class Directory extends Component {
	render() {
		return (
			<div className="directoryMenu">

				<div id="songMenu" className="border border-danger">
					Songs
				</div>
				
				<div id="choreoMenu" className="border border-danger">
					<h1>Choreographers</h1>
				</div>
				
				<div id="teamMenu" className="border border-danger">
					<h1>Teams</h1>
				</div>

			</div>
		)
	}
}

export default Directory;
