"use strict";
var React = require('react');


var GroupBar = require('./groupBar.jsx');

var ChatList = React.createClass({
	propTypes: {
		// Checks if prop is passed by the Parent component
		groups: React.PropTypes.array.isRequired,
		onClick: React.PropTypes.func.isRequired
	},
	render: function() {
		return (
			<div>
				<ul className="list-group">
				<li className="list-group-item">Search option
				</li>
				<GroupBar 
					groups={this.props.groups}
					onClick={this.props.onClick}
				/>
				</ul>
			</div>
		);
	}
});

module.exports = ChatList;