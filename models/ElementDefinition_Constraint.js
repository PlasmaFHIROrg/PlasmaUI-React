"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.severity = void 0;
/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
class ElementDefinition_Constraint {
}
exports.default = ElementDefinition_Constraint;
/**
 * Identifies the impact constraint violation has on the conformance of the instance.
 */
var severity;
(function (severity) {
    severity[severity["error"] = 0] = "error";
    severity[severity["warning"] = 1] = "warning";
})(severity = exports.severity || (exports.severity = {}));
//# sourceMappingURL=ElementDefinition_Constraint.js.map