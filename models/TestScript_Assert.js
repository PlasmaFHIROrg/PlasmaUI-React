"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = exports.requestMethod = exports.operator = exports.direction = void 0;
/**
 * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 */
class TestScript_Assert {
}
exports.default = TestScript_Assert;
/**
 * The direction to use for the assertion.
 */
var direction;
(function (direction) {
    direction[direction["response"] = 0] = "response";
    direction[direction["request"] = 1] = "request";
})(direction = exports.direction || (exports.direction = {}));
/**
 * The operator type defines the conditional behavior of the assert. If not defined, the default is equals.
 */
var operator;
(function (operator) {
    operator[operator["equals"] = 0] = "equals";
    operator[operator["notEquals"] = 1] = "notEquals";
    operator[operator["notIn"] = 2] = "notIn";
    operator[operator["greaterThan"] = 3] = "greaterThan";
    operator[operator["lessThan"] = 4] = "lessThan";
    operator[operator["empty"] = 5] = "empty";
    operator[operator["notEmpty"] = 6] = "notEmpty";
    operator[operator["contains"] = 7] = "contains";
    operator[operator["notContains"] = 8] = "notContains";
    operator[operator["eval"] = 9] = "eval";
})(operator = exports.operator || (exports.operator = {}));
/**
 * The request method or HTTP operation code to compare against that used by the client system under test.
 */
var requestMethod;
(function (requestMethod) {
    requestMethod[requestMethod["get"] = 0] = "get";
    requestMethod[requestMethod["options"] = 1] = "options";
    requestMethod[requestMethod["patch"] = 2] = "patch";
    requestMethod[requestMethod["post"] = 3] = "post";
    requestMethod[requestMethod["put"] = 4] = "put";
    requestMethod[requestMethod["head"] = 5] = "head";
})(requestMethod = exports.requestMethod || (exports.requestMethod = {}));
/**
 * okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable.
 */
var response;
(function (response) {
    response[response["okay"] = 0] = "okay";
    response[response["created"] = 1] = "created";
    response[response["noContent"] = 2] = "noContent";
    response[response["notModified"] = 3] = "notModified";
    response[response["bad"] = 4] = "bad";
    response[response["forbidden"] = 5] = "forbidden";
    response[response["notFound"] = 6] = "notFound";
    response[response["methodNotAllowed"] = 7] = "methodNotAllowed";
    response[response["conflict"] = 8] = "conflict";
    response[response["gone"] = 9] = "gone";
    response[response["preconditionFailed"] = 10] = "preconditionFailed";
    response[response["unprocessable"] = 11] = "unprocessable";
})(response = exports.response || (exports.response = {}));
//# sourceMappingURL=TestScript_Assert.js.map