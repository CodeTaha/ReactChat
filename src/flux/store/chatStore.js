"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
// Can concat two objects into one
var objectAssign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = "change";

var objectAssign = require('object-assign');

var _groups = [],
	_chats = {},
	_selectedGroup = {},
	_participant;
var ChatStore = objectAssign({}, EventEmitter.prototype, {
	// this adds more functionality to EventEmitter
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT,callback);
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},

	getAllGroups: function() {
		return _groups;
	},

	getGroupById: function(id) {
		return _.find(_groups,{id:id});
	},

	getActiveParticipant: function() {
		return _participant;
	},

	getSelectedGroup: function() {
		return _selectedGroup;
	},

	getChats: function() {
		return _chats;
	},

	selectGroup: function(groupId) {
		if(_chats[groupId] === undefined) {
			//var 
		}
	}
});

Dispatcher.register(function(action){
	switch(action.actionType) {
		case ActionTypes.INITIALIZE:
			_groups = action.initialData.groups;
			_participant = action.initialData.participant;
			_selectedGroup = {
				groupName: '',
				groupId: '',
			};
			ChatStore.emitChange();
			break;
		case ActionTypes.SELECTGROUP:
			if(action.fetchData) {
				_chats[action.groupId] = action.chat;
			}
			var group = ChatStore.getGroupById(action.groupId);
			_selectedGroup.groupName = group.groupName;
			_selectedGroup.groupId = group.id;
			//console.log(_chats,_selectedGroup)
			ChatStore.emitChange();
			break;
		default:
			// no op
	}
});

module.exports = ChatStore;

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

