"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ChatApi = require('../../api/chatApi');
var ActionTypes = require('../constants/actionTypes');

var InitializeActions = {
	initApp: function() {
		// Dispatcher tells all the stores that
		// an author has just been created
		Dispatcher.dispatch({
			actionType:  ActionTypes.INITIALIZE,
			initialData: {
				groups: ChatApi.getAllGroups(),
				participant: ChatApi.getActiveParticipant()
			}
		});
	}
};

module.exports = InitializeActions;