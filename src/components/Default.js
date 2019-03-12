import React, { Component } from 'react';

export default class Default extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto text-center text-uppercase pt-5">
						<h1>404 Error</h1>
						<h3>
							Sorry page <span className="text-danger ">{this.props.location.pathname}</span> not found.
						</h3>
					</div>
				</div>
			</div>
		);
	}
}
