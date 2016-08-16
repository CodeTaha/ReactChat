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
	},
	sendMessage: function(message, groupId, cb) {
		// If success true, message sent successfully
		var success = ChatApi.sendMessage(message, groupId);
		Dispatcher.dispatch({
			actionType:  ActionTypes.SENDMESSAGE,
			message: message,
			groupId: groupId,
			success: success,
		});
		cb(success);
	}
};

module.exports = ChatActions;