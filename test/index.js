var assert = require('assert'),
	capitalize = require('../index.js')


describe('Capitalizer', function () {

	it('Capitalizes the first letter of a string', function () {
		assert.equal(capitalize('test'), 'Test')
		assert.equal(capitalize.first('test'), 'Test')
	})


	it('Capitalizes all words in a string', function () {
		assert.equal(
			capitalize.all('this is a test sentence'),
			'This Is A Test Sentence'
		)
	})


	it('Capitalizes all words in an array', function () {
		assert.deepEqual(
			capitalize(['this', 'is', 'a', 'test', 'sentence']),
			['This', 'Is', 'A', 'Test', 'Sentence']
		)
	})


	it.skip('Recursively capitalizes all strings in an object', function () {
		assert.equal(
			capitalize({
				name: 'john',
				hobby: 'chillin',
				address: {
					country: 'australia',
					street: 'wayne boulevard'
				}
			}),
			{
				name: 'John',
				hobby: 'Chillin',
				address: {
					country: 'Australia',
					street: 'Wayne boulevard'
				}
			}
		)
	})
})

