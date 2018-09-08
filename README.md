## Description

Abstract class for all control with native dom elements within jean environment 

## Support
Supports AMD eco system. If there is no loader, DomElement is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
var ExampleControl = function(options){
    // the default options for this control
    // if a specific option is not user defined, the value
    // from defaultOptions will be used.
    var defaultOptions = {
        html: "<div id=''>Example</div>"
    };
    // Inherit constructor from DomElement
    DomElement.apply(this, [options, defaultOptions]);
    // Now there are this.options, this.element available for ExampleControl. Within options there are the merged options from options and default options. 
};
// Inherit prototype methods from Control
ExampleControl.prototype = Object.create(DomElement.prototype);
ExampleControl.prototype.constructor = ExampleControl;

// Initialise the control
var eC = new ExampleControl();
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