/*eslint-disable strict */ //Disabling check because we cant run strict mode. Need global vars


var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var ChatApi = require('../api/chatApi');

var Header = require('./common/header.jsx');
var ChatList = require('./users/chatList.jsx');
var App = React.createClass({
	getInitialState: function() {
		return {
			//authors:[] // Before Flux
			groups:ChatApi.getAllGroups()
		};
	},
	selectGroup: function(id,event){
		event.preventDefault();
		console.log("selectGroup",id)
		//debugger;
		//AuthorActions.deleteAuthor(id);
		//toastr.success('Author Deleted');
	},
	render: function() {
		return (
			<div>
				<Header />
				<div className="container-fluid">
					{/*<RouteHandler />*/}
					<div className="row">
						<div className="col-md-4">
							<ChatList 
								groups={this.state.groups}
								onClick={this.selectGroup}
							/>
						</div>
							<div className="col-md-8">
								Chat messages will go here
							</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = App;