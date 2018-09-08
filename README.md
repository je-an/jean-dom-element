## Description

Provides functionality for a basic html dom element

## Support
Supports both CommonJS and AMD eco system. If there is no loader, DomElement is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
var obj = new DomElement();
```
- Use it with require.js
```js
require(["path/to/DomElement"], function(DomElement){
    // Work with DomElement
});
```
- Use it with node.js
```js
var DomElement = require("jean-dom-element");
```
## Installation

`npm install jean-dom-element --save --legacy-bundling`

## API Reference

TBD

## Tests

- Open spec/spec-runner.html in browser to see the test cases.

## License

MIT