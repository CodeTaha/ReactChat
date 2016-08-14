"use strict";

var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
	<Route name='app' path='/' handler={require('./components/app.jsx')}>
		<NotFoundRoute handler={require('./components/404.jsx')}/>
	</Route>

);

module.exports = routes;