//var renderer = require('react-test-renderer');

jest.unmock('../sum'); // unmock to use the actual implementation of sum

describe('sums', () => {
	it('adds 1 + 2 to equal 3', () => {
		const sum = require('../sum');
		expect(sum(1, 2)).toBe(3);
	});

});