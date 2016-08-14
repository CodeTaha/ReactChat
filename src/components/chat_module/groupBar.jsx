"use strict";

var React = require('react');

var toastr = require('toastr');

var GroupBar = React.createClass({
	propTypes: {
		// Checks if prop is passed by the Parent component
		groups: React.PropTypes.array.isRequired,
		onClick: React.PropTypes.func.isRequired
	},

	deleteGroup: function(id,event){
		// TODO clear all messages
		event.preventDefault();
		//debugger;
		//AuthorActions.deleteAuthor(id);
		toastr.success('Author Deleted');
	},

	render: function() {
		var createGroupRow = function(group) {
			//console.log(group)
			var active='list-group-item';
			if(group.id===this.props.selectedGroupId){
				active=active + ' active';
			}
			return (
				<a href="#" 
					onClick={this.props.onClick.bind(null, group.id)} 
					key={group.id} 
					className={active}>
						{group.groupName}
					<span className="badge">14</span>
				</a>
			);
		};
		return (
			<div>
				
					{this.props.groups.map(createGroupRow,this)}
				
			</div>
		);
	}
});

module.exports = GroupBar;