"use strict";
var React = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');
//var InitializeActions = require('./flux/actions/initializeAction');

//InitializeActions.initApp();

//Router.run(routes, Router.HistoryLocation, function(Handler){
Router.run(routes, function(Handler){
	React.render(<Handler/>, document.getElementById('app'));
})