"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.severity = void 0;
/**
 * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 */
class DetectedIssue {
}
exports.default = DetectedIssue;
/**
 * This is a DetectedIssue resource
 */
DetectedIssue.resourceType = "DetectedIssue";
/**
 * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
 */
var severity;
(function (severity) {
    severity[severity["high"] = 0] = "high";
    severity[severity["moderate"] = 1] = "moderate";
    severity[severity["low"] = 2] = "low";
})(severity = exports.severity || (exports.severity = {}));
//# sourceMappingURL=DetectedIssue.js.map