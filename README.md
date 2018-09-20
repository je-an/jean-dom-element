## Description

Abstract class for all controls with native dom elements within jean environment.

## Support
Supports AMD eco system. If there is no loader, DomElement is registered as a browser variable.

## Code ExampleControl
- Use it as browser variable
```js
// Initialise the control
// ExampleControl inherits DomElements constructor and 
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



## Information

Each inheriting control needs to implement the following methods in its prototype:

### ExampleControl.prototype.set(o) 

Sets data to the control

**Parameters**
- **o**: `Any` - data to be displayed

**Returns**
-  `Boolean` - True, if data is set, false otherwise

### ExampleControl.prototype.get() 

Gets the data from the control

**Returns**
-  `Object` - The data which is currently displayed

### ExampleControl.prototype.clear() 

Clears the data from the control

**Returns**
-  `Boolean` - True, if the control is cleared, false otherwise

### ExampleControl.prototype.isDataValid() 

Checks if there is valid data within this control.
E.g. after a user input etc.

**Returns**
-  `Boolean` - True, if the data is valid, false otherwise

### ExampleControl.prototype.lock() 

Locks the control so that no more interaction can be made.

**Returns**
-  `Boolean` - True, if the control is locked, false otherwise

### ExampleControl.prototype.unlock() 

Unlocks the control so that interaction can be made.

**Returns**
-  `Boolean` - True, if the control is locked, false otherwise

## API Reference

### DomElement Constructor

**Options**
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