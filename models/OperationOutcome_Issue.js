"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.code = exports.severity = void 0;
/**
 * A collection of error, warning, or information messages that result from a system action.
 */
class OperationOutcome_Issue {
}
exports.default = OperationOutcome_Issue;
/**
 * Indicates whether the issue indicates a variation from successful processing.
 */
var severity;
(function (severity) {
    severity[severity["fatal"] = 0] = "fatal";
    severity[severity["error"] = 1] = "error";
    severity[severity["warning"] = 2] = "warning";
    severity[severity["information"] = 3] = "information";
})(severity = exports.severity || (exports.severity = {}));
/**
 * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
 */
var code;
(function (code) {
    code[code["invalid"] = 0] = "invalid";
    code[code["structure"] = 1] = "structure";
    code[code["required"] = 2] = "required";
    code[code["value"] = 3] = "value";
    code[code["invariant"] = 4] = "invariant";
    code[code["security"] = 5] = "security";
    code[code["login"] = 6] = "login";
    code[code["unknown"] = 7] = "unknown";
    code[code["expired"] = 8] = "expired";
    code[code["forbidden"] = 9] = "forbidden";
    code[code["suppressed"] = 10] = "suppressed";
    code[code["processing"] = 11] = "processing";
    code[code["duplicate"] = 12] = "duplicate";
    code[code["deleted"] = 13] = "deleted";
    code[code["extension"] = 14] = "extension";
    code[code["conflict"] = 15] = "conflict";
    code[code["transient"] = 16] = "transient";
    code[code["exception"] = 17] = "exception";
    code[code["timeout"] = 18] = "timeout";
    code[code["incomplete"] = 19] = "incomplete";
    code[code["throttled"] = 20] = "throttled";
    code[code["informational"] = 21] = "informational";
})(code = exports.code || (exports.code = {}));
//# sourceMappingURL=OperationOutcome_Issue.js.map