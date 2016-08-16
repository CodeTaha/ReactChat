jest.unmock('../chat_module/groupBar');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import GroupBar from '../chat_module/groupBar';

describe('Testing GroupBar', function() {
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
		<GroupBar 
			groups={groups}
			onClick={onClick}
			selectedGroupId='grp2'
		/>
    );
	var anchors = TestUtils.scryRenderedDOMComponentsWithTag(component, 'a');
	it('renders an anchor for each group', function() {
		
		expect(anchors.length).toEqual(2);
	});

	it('groupName is correct', function(){
		expect(ReactDOM.findDOMNode(anchors[0]).textContent).toEqual('John');
	});

	it('expect onCHange to called onClick', function(){
		TestUtils.Simulate.click(anchors[0]);
		expect(onClick).toBeCalled();
		//expect(onClick).not.toBeCalled();
	});
});