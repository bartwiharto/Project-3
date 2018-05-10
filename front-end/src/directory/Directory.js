import React, { Component } from 'react';
import './Directory.css';


class Directory extends Component {
	render() {
		return (
			<div className="directoryMenu">

				<a href="#" id="songMenu" className="border border-color:white rounded">
					Songs
				</a>
				
				<a href="#" id="choreoMenu" className="border border-color:white rounded">
					Choreo
				</a>
				
				<a href="#" id="teamMenu" className="border border-color:white rounded">
					Teams
				</a>

			</div>
		)
	}
}

export default Directory;
