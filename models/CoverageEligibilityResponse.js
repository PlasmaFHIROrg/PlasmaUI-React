"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outcome = exports.purpose = void 0;
/**
 * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 */
class CoverageEligibilityResponse {
}
exports.default = CoverageEligibilityResponse;
/**
 * This is a CoverageEligibilityResponse resource
 */
CoverageEligibilityResponse.resourceType = "CoverageEligibilityResponse";
/**
 * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
 */
var purpose;
(function (purpose) {
    purpose[purpose["benefits"] = 0] = "benefits";
    purpose[purpose["discovery"] = 1] = "discovery";
    purpose[purpose["validation"] = 2] = "validation";
})(purpose = exports.purpose || (exports.purpose = {}));
/**
 * The outcome of the request processing.
 */
var outcome;
(function (outcome) {
    outcome[outcome["queued"] = 0] = "queued";
    outcome[outcome["complete"] = 1] = "complete";
    outcome[outcome["error"] = 2] = "error";
    outcome[outcome["partial"] = 3] = "partial";
})(outcome = exports.outcome || (exports.outcome = {}));
//# sourceMappingURL=CoverageEligibilityResponse.js.map