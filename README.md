## Description

Abstract class for all controls with native dom elements within jean environment.

## Support
Supports AMD eco system. If there is no loader, DomElement is registered as a browser variable.

## Code ExampleControl
- Use it as browser variable
```js
// Initialise the control
// ExampleControl inherits DomElement constructor and 
// prototype methods
var eC = new ExampleControl({  html: "<div id=''>ExampleControl</div>" });
// Add the control to the document
document.body.appendChild(ec.element);
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
- **id**: `String` - `optional` - id of this element
- **html**: `String` - `mandatory` - html markup of this element

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