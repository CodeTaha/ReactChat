jest.mock('../chat_module/chatInput');
jest.unmock('../chat_module/chatDetail');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ChatDetail from '../chat_module/chatDetail';

describe('Testing ChatDetail', function() {
	var props = {
		chats: [{"media":false,"text":"Hey!! Jack","timestamp":1465755826,"participant":{"id":"me","primary":true,"name":"Taha"}},{"media":false,"text":"Howdy Taha :o","timestamp":1455221006,"participant":{"id":"john","primary":false,"name":"John"}},{"media":true,"text":"Dont you worry about Jack :-P","timestamp":1470206521,"participant":{"id":"me","primary":true,"name":"Taha"},"mediaParams":{"type":"img","path":"images/chatData/tigers.jpg"}}],
		selectedGroup:{"groupName":"John","groupId":"grp2"},
		participant:{"id":"me","primary":true,"name":"Taha"},
		message: {
			"media": false,
			"mediaParams": {
				"type": "",
				"path": "",
				"file": {
					"name": ""
				}
			},
			"text": "",
			"timestamp": null
		}
	};
	props.onChange = jest.genMockFunction();
	props.onSend = jest.genMockFunction();

	const component = TestUtils.renderIntoDocument(
		<ChatDetail
			chats={props.chats}
			selectedGroup={props.selectedGroup}
			participant={props.participant} 
			message={props.message}
			onChange={props.onChange}
			onSend={props.onSend}
		/>
    );
	var li = TestUtils.scryRenderedDOMComponentsWithTag(component, 'li');
	it('renders a Panel', function() {
		TestUtils.findRenderedDOMComponentWithClass(component, 'panel');
	});

	it('renders 3 li', function() {
		expect(li.length).toEqual(3);
	});

	it('third li should contain one image', function() {
		TestUtils.findRenderedDOMComponentWithClass(component, 'img-thumbnail');
	});	
});