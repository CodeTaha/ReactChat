"use strict";

var React = require ("react");
var Header = React.createClass({
	render: function () {
		return (
			<nav className='navbar navbar-default'>
				<div className='container-fluid'>
					<a href="#" className="navbar-brand">
						<img src="images/favicon-32x32.png" />
					</a>
					<ul className="nav navbar-nav">
						<li><a href="#">ChatApp built with React & Flux</a></li>
					</ul>
				</div>
			</nav>
		);
	}
});

module.exports = Header