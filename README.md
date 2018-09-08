## Description

Abstract class for all control with native dom elements within jean environment 

## Support
Supports AMD eco system. If there is no loader, DomElement is registered as a browser variable.

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
## Installation

`npm install jean-dom-element --save --legacy-bundling`

## API Reference

### DomElement Constructor

**Options**
- **html**: `String` - `mandatory` - html markup of this element

### DomElement.createElementFromMarkup(html) 

**Parameters**
- **html**: `String` - the html markup

**Returns**
- `Element` - the created DOM element

### DomElement.isInViewPort() 

**Returns**
- `Boolean` - true if element is within the viewport, false otherwise

### DomElement.attachToDom() 

**Returns**
- `Boolean` - true if element is attached to DOM

### DomElement.detachFromDom() 

**Returns**
- `Boolean` - true if element is detached from DOM

## Tests

- Open spec/spec-runner.html in browser to see the test cases.

## License

MIT