"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.method = void 0;
/**
 * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 */
class TestScript_Operation {
}
exports.default = TestScript_Operation;
/**
 * The HTTP method the test engine MUST use for this operation regardless of any other operation details.
 */
var method;
(function (method) {
    method[method["get"] = 0] = "get";
    method[method["options"] = 1] = "options";
    method[method["patch"] = 2] = "patch";
    method[method["post"] = 3] = "post";
    method[method["put"] = 4] = "put";
    method[method["head"] = 5] = "head";
})(method = exports.method || (exports.method = {}));
//# sourceMappingURL=TestScript_Operation.js.map