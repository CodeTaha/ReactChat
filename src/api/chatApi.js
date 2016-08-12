"use strict";

//This file is mocking a web API by hitting hard coded data.
var groups = require('./groupData').groups;
var chats = require('./chatData').chats;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(group) {
	var randomId = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
	return (group.groupName.toLowerCase()+randomId()+randomId()+randomId());
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var chatApi = {
	getAllGroups: function() {
		return _clone(groups); 
	},

	getGroupById: function(id) {
		var group = _.find(groups, {id: id});
		return _clone(group);
	},
	
	saveGroup: function(group) {
		// Todo saveGroup and create chat data
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the group to the DB via AJAX call...');
		
		if (group.id) {
			var existingGroupIndex = _.indexOf(groups, _.find(groups, {id: group.id})); 
			groups.splice(existingGroupIndex, 1, group);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new authors in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			group.id = _generateId(group);
			groups.push(group);
		}

		return _clone(group);
	},

	deleteAuthor: function(id) {
		console.log('Pretend this just deleted the author from the DB via an AJAX call...');
		_.remove(groups, { id: id});
	}
};

module.exports = chatApi;