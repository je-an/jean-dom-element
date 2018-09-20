define(["DomElement"], function (DomElement) {
    var TestControl = function (options) {
        DomElement.call(this, options);
    };
    TestControl.prototype = Object.create(DomElement.prototype);
    TestControl.prototype.constructor = TestControl;
    TestControl.prototype.set = function () { };
    TestControl.prototype.get = function () { };
    TestControl.prototype.clear = function () { };
    TestControl.prototype.isDataValid = function () { };
    TestControl.prototype.lock = function () { };
    TestControl.prototype.unlock = function () { };
    return TestControl;
});