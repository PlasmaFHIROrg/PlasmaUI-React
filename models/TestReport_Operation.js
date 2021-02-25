"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = void 0;
/**
 * A summary of information based on the results of executing a TestScript.
 */
class TestReport_Operation {
}
exports.default = TestReport_Operation;
/**
 * The result of this operation.
 */
var result;
(function (result) {
    result[result["pass"] = 0] = "pass";
    result[result["skip"] = 1] = "skip";
    result[result["fail"] = 2] = "fail";
    result[result["warning"] = 3] = "warning";
    result[result["error"] = 4] = "error";
})(result = exports.result || (exports.result = {}));
//# sourceMappingURL=TestReport_Operation.js.map