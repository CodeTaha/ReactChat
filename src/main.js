"use strict";
var React = require('react');
var ReactDom = require('react-dom');
//var Router = require('react-router');
//var routes = require('./routes.jsx');
var InitializeActions = require('./flux/actions/initializeAction');

var App = require('./components/app')

InitializeActions.initApp();

var Main = React.createClass({
	render: function() {

		return (
			<div>
				<App />
			</div>
		);
	}
});

ReactDom.render(<Main />,document.getElementById('app'));

//Router.run(routes, Router.HistoryLocation, function(Handler){
/*Router.run(routes, function(Handler){
	React.render(<Handler/>, document.getElementById('app'));
})*/
