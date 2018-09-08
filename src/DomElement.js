define([
    "TypeCheck",
    "Failure"
], function (
    TypeCheck,
    Failure
) {
        /**
         * Provides functionality for a basic html dom element 
         * @alias DomElement 
         * @constructor
         * @param {Object} options - options object
         * @param {String} options.html - html markup of this control
         */
        var DomElement = function (options) {
            this.options = TypeCheck.isDefined(options) ? options : Failure.throwTypeError("options is undefined");
            this.element = TypeCheck.isString(options.html) ? this.createElementFromMarkup(options.html) : Failure.throwTypeError("options.html is not a string");
        };
        /**
         * @param {String} html - the html markup 
         * @returns {Element} - the created DOM element
         */
        DomElement.prototype.createElementFromMarkup = function (html) {
            if (!TypeCheck.isString(html)) {
                Failure.throwTypeError("html is not a string");
            }
            var div = document.createElement('div');
            div.innerHTML = html.trim();
            return div.firstChild;
        };
        /**
         * @returns {Boolean} - True if element is within the viewport, false otherwise
         */
        DomElement.prototype.isInViewPort = function () {
            var element = this.element, bounds = this.element.getBoundingClientRect();
            return ((bounds.top + bounds.height) > 0) && bounds.top < window.innerHeight;
        }
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