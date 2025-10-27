import * as assert from 'assert';
import capitalize = require('../index');

describe('Capitalizer', function () {

	it('Capitalizes the first letter of a string', function () {
		assert.equal(capitalize('test'), 'Test');
		assert.equal(capitalize.first('test'), 'Test');
	});


	it('Capitalizes all words in a string', function () {
		assert.equal(
			capitalize.all('this is a test sentence'),
			'This Is A Test Sentence'
		);
	});


	it('Capitalizes all words in an array', function () {
		assert.deepEqual(
			capitalize(['this', 'is', 'a', 'test', 'sentence']),
			['This', 'Is', 'A', 'Test', 'Sentence']
		);
	});


	it('Recursively capitalizes all strings in an object', function () {
		assert.deepEqual(
			capitalize({
				name: 'john',
				hobby: 'chillin',
				address: {
					country: 'australia',
					street: 'wayne boulevard'
				}
			} as any),
			{
				name: 'John',
				hobby: 'Chillin',
				address: {
					country: 'Australia',
					street: 'Wayne Boulevard'
				}
			}
		);
	});
});
