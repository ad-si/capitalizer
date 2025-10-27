# Capitalizer

Capitalize a string or all words in a string or all items in an array or all values in an object.

Written in TypeScript with full type safety.


## Installation

```
$ npm install --save capitalizer
```

and in your files

**JavaScript:**
```js
var capitalize = require('capitalizer')
```

**TypeScript:**
```ts
import capitalize = require('capitalizer');
```

To use it in the browser please use [browserify](http://browserify.org).


## Usage

Capitalize the first letter of a string:

```js
assert.equal(capitalize('test'), 'Test')

// or

assert.equal(capitalize.first('test'), 'Test')
```

**TypeScript:**
```ts
import capitalize = require('capitalizer');

assert.equal(capitalize('test'), 'Test');
assert.equal(capitalize.first('test'), 'Test');
```


Capitalize all words in a string:

```js
assert.equal(
  capitalize.all('this is a test sentence'),
  'This Is A Test Sentence'
)
```


Capitalize all words in an array:

```js
assert.equal(
  capitalize(['this', 'is', 'a', 'test', 'sentence']),
  ['This', 'Is', 'A', 'Test', 'Sentence']
)
```


TODO: Recursively capitalize all strings in an object:

```js
assert.equal(
  capitalize({
    name: 'john',
    hobby: 'chillin',
    address: {
      country: 'australia',
      street: 'wayne boulevard',
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
```
