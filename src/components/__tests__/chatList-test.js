jest.mock('../chat_module/groupBar');
jest.unmock('../chat_module/chatList');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ChatList from '../chat_module/chatList';

describe('Testing ChatList', function() {
	const groups = [{
			"id": "grp2",
			"groupName": "John",
			"participants": [{
				"id": "me",
				"primary": true,
				"name": "Taha"
			}, {
				"id": "john",
				"primary": false,
				"name": "John"
			}]
		}, {
			"id": "dan",
			"groupName": "Dan",
			"participants": [{
				"id": "me",
				"primary": true,
				"name": "Taha"
			}, {
				"id": "dan",
				"primary": false,
				"name": "Dan"
			}]
		}
	];
	var onClick = jest.genMockFunction();
	const component = TestUtils.renderIntoDocument(
		<ChatList 
			groups={groups}
			onClick={onClick}
			selectedGroupId='grp2'
		/>
    );
	it('renders a ul element', function() {
		TestUtils.findRenderedDOMComponentWithTag(component, 'ul');
	});
});