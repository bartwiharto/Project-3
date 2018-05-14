import React, { Component } from 'react';
import './Choreo.css';


class Choreo extends Component {
	render() {
		return (
			<div className="choreoForm">
				<form class="form-inline" id="choreographersInput" method="POST" action="/choreo" >
					
					<div class="form-group" id="cInputName">
					    <input type="string" class="form-control" name="choreoName" placeholder="Choreographer's Name" />
					</div>

					<div class="form-group" id="cInputSName">
					    <input type="string" class="form-control" name="choreoSongName" placeholder="Song Name" />
					</div>


					<div class="form-group" id="cInputYear">
					    <input type="string" class="form-control" name="choreoYear" placeholder="Year" />
					</div>


					<div class="form-group" id="cInputYT">
					    <input type="string" class="form-control" name="choreoYoutube" placeholder="Youtube Link" />
					</div>


					<div class="form-group" id="cInputBtn">
						  <button type="submit" class="btn btn-primary">Submit</button>
					</div>

				</form>
			</div>
		)
	}
}

export default Choreo;
