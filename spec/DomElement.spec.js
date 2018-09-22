// jscs:disable
// jshint ignore:start
define([
    "DomElement",
    "TestControl",
    "NotImplementedError"
], function (DomElement, TestControl, NotImplementedError) {
    describe('DomElement.spec.js', function () {
        describe("DomElement", function () {
            it("creates an instance", function () {
                var e = new TestControl({ html: "<div></div>" });
                expect(e).not.toBeUndefined();
                expect(e.element).not.toBeUndefined();
                expect(e.element instanceof HTMLElement).toBe(true);
            });
            it("throws an error if no options is provided to constructor", function () {
                try {
                    var e = new TestControl();
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
            it("throws an error if no html markup is provided to constructor", function () {
                try {
                    var e = new TestControl({});
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
        });
        describe("DomElement.prototype.attachToDom", function () {
            it("attachs the element to the DOM", function () {
                var e = new TestControl({ html: "<div></div>" });
                expect(e.attachToDom()).toBe(true);
            });
        });
        describe("DomElement.prototype.detachFromDom", function () {
            it("detachs the element from the DOM", function () {
                var e = new TestControl({ html: "<div></div>" });
                expect(e.detachFromDom()).toBe(true);
            });
        });
    });
});

