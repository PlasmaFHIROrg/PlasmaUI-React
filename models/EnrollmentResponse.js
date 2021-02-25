"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outcome = void 0;
/**
 * This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
 */
class EnrollmentResponse {
}
exports.default = EnrollmentResponse;
/**
 * This is a EnrollmentResponse resource
 */
EnrollmentResponse.resourceType = "EnrollmentResponse";
/**
 * Processing status: error, complete.
 */
var outcome;
(function (outcome) {
    outcome[outcome["queued"] = 0] = "queued";
    outcome[outcome["complete"] = 1] = "complete";
    outcome[outcome["error"] = 2] = "error";
    outcome[outcome["partial"] = 3] = "partial";
})(outcome = exports.outcome || (exports.outcome = {}));
//# sourceMappingURL=EnrollmentResponse.js.map