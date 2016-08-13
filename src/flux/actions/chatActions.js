"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ChatApi = require('../../api/chatApi');
var ActionTypes = require('../constants/actionTypes');

var ChatActions = {
	selectGroup: function(groupId, fetchData) {
		var chat='';
		if(fetchData) {
			chat = ChatApi.getChatsById(groupId);
		}
		// Dispatcher tells all the stores that
		// an author has just been created
		Dispatcher.dispatch({
			actionType:  ActionTypes.SELECTGROUP,
			chat: chat,
			groupId: groupId,
			fetchData: fetchData,
		});
	}
	/*
	createAuthor: function(author) {
		var newAuthor = AuthorApi.saveAuthor(author);

		// Dispatcher tells all the stores that
		// an author has just been created
		Dispatcher.dispatch({
			actionType:  ActionTypes.CREATE_AUTHOR,
			author: newAuthor
		});
	},
	updateAuthor: function(author) {
		var updatedAuthor = AuthorApi.saveAuthor(author);

		// Dispatcher tells all the stores that
		// an author has just been updated
		Dispatcher.dispatch({
			actionType:  ActionTypes.UPDATE_AUTHOR,
			author: updatedAuthor
		});
	},
	deleteAuthor: function(id) {
		debugger;
		AuthorApi.deleteAuthor(id);

		// Dispatcher tells all the stores that
		// an author has just been deleted
		Dispatcher.dispatch({
			actionType:  ActionTypes.DELETE_AUTHOR,
			id: id
		});
	},*/
};

module.exports = ChatActions;