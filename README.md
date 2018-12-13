# streams

## Example Usage

This repo attempts to create a type-independent API for indexing chunks for searching.

``` javascript
const createChunk = require('./lib/createChunk');

const message = createChunk({
	"type": "message",
	"content": {
		"user": "Monty",
		"text": "Hello",
		"url": "http://telegram.com/"
	},
	"date": 1544551774794,
	"source": "telegram"
});

message.toTerms();
// [ 'Monty', 'Hello' ]

const text = createChunk({
	"type": "text",
	"content": "Hello, World",
	"date": 1544551774794,
	"source": "telegram"
});

text.toTerms();
// [ 'Hello, World' ]
```

### API

### Chunk

A chunk is a time-discrete event in a [stream](https://github.com/ovsoinc/nile.chat/issues/34).

``` javascript
{
	"type": String,
	"content": Object,
    "date": Number,
    "source": String
}
```

#### Types

##### [Message](./Message.js)

``` javascript
{
	"type": "message",
	"content": {
                "user": "Monty",
                "text": "Hello",
                "url": "http://telegram.com/"
        },
        "date": 1544551774794,
        "source": "telegram"
}
```
