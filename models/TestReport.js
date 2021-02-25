"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = exports.status = void 0;
/**
 * A summary of information based on the results of executing a TestScript.
 */
class TestReport {
}
exports.default = TestReport;
/**
 * This is a TestReport resource
 */
TestReport.resourceType = "TestReport";
/**
 * The current state of this test report.
 */
var status;
(function (status) {
    status[status["completed"] = 0] = "completed";
    status[status["waiting"] = 1] = "waiting";
    status[status["stopped"] = 2] = "stopped";
})(status = exports.status || (exports.status = {}));
/**
 * The overall result from the execution of the TestScript.
 */
var result;
(function (result) {
    result[result["pass"] = 0] = "pass";
    result[result["fail"] = 1] = "fail";
    result[result["pending"] = 2] = "pending";
})(result = exports.result || (exports.result = {}));
//# sourceMappingURL=TestReport.js.map