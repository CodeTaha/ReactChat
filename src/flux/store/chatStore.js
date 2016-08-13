"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
// Can concat two objects into one
var objectAssign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = "change";
var _authors = [];

var objectAssign = require('object-assign');

var chatStore = objectAssign({}, EventEmitter.prototype, {
	// this adds more functionality to EventEmitter
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT,callback);
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	}
});

Dispatcher.register(function(action){
	switch(action.actionType) {
		
	}
});

module.exports = chatStore;

/*
* Basic flux template
var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = "change";
// Can concat two objects into one
var objectAssign = require('object-assign');

var AuthorStore = assign({}, EventEmitter.prototype, {
	// this adds more functionality to EventEmitter
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT,callback);
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	}
});

Dispatcher.register(function(action){
	switch(action.actionType) {
		
	}
});

module.exports = AuthorStore;

*/

