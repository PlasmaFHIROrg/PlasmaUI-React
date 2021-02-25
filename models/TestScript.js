"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 */
class TestScript {
}
exports.default = TestScript;
/**
 * This is a TestScript resource
 */
TestScript.resourceType = "TestScript";
/**
 * The status of this test script. Enables tracking the life-cycle of the content.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=TestScript.js.map