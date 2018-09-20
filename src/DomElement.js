define([
    "TypeCheck",
    "Failure",
    "DomUtil",
    "Interface"
], function (
    TypeCheck,
    Failure,
    DomUtil,
    Interface
) {
        /**
         * Abstract class for all control with native dom elements 
         * within jean environment 
         * @alias DomElement 
         * @abstract
         * @constructor
         * @throws {TypeError} - if options are undefined
         * @throws {TypeError} - if options.html is not a string
         * @param {Object} options - options object
         * @param {String} options.html - html markup of this element
         */
        var DomElement = function (options) {
            this.options = TypeCheck.isDefined(options) ? options : Failure.throwTypeError("options is undefined");
            this.element = TypeCheck.isString(options.html) ? DomUtil.createElementFromMarkup(options.html) : Failure.throwTypeError("options.html is not a string");
            Interface.areMethodsImplemented(["set", "get", "clear", "isDataValid", "lock", "unlock"], this);
        };
        /** @returns {Boolean} - True if element is attached to DOM */
        DomElement.prototype.attachToDom = function () {
            this.element.style.display = "block";
            return true;
        };
        /** @returns {Boolean} - True if element is detached from DOM */
        DomElement.prototype.detachFromDom = function () {
            this.element.style.display = "none";
            return true;
        };
        return DomElement;
    });