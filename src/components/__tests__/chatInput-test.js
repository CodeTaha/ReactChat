jest.unmock('../chat_module/chatInput');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ChatInput from '../chat_module/chatInput';

describe('Testing ChatInput', function() {
	var message = {
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
	};
	var onChange = jest.genMockFunction();
	var onSend = jest.genMockFunction();
	const component = TestUtils.renderIntoDocument(
		<ChatInput 
			message={message}
			onChange={onChange}
			onSend={onSend}
		/>
    );
	var inputs = TestUtils.scryRenderedDOMComponentsWithTag(component, 'input');
    
    it('renders a Form', function() {
		TestUtils.findRenderedDOMComponentWithTag(component, 'form');
	});

	it('renders 3 input elements', function() {
		expect(inputs.length).toEqual(3);
	});

	it('calls send on Submit', function() {
		TestUtils.Simulate.click(inputs[2]);
		expect(onSend).toBeCalled();
	});

	it('calls onChange when inputs change', function() {
		var node = inputs[0];
		node.value = 'Wolverine';
		TestUtils.Simulate.change(node);
		expect(onChange).toBeCalled();

		node = inputs[1];
		node.value = 'file';
		TestUtils.Simulate.change(node);
		expect(onChange).toBeCalled();
	});
});