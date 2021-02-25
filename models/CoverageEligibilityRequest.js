"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purpose = void 0;
/**
 * The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 */
class CoverageEligibilityRequest {
}
exports.default = CoverageEligibilityRequest;
/**
 * This is a CoverageEligibilityRequest resource
 */
CoverageEligibilityRequest.resourceType = "CoverageEligibilityRequest";
/**
 * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
 */
var purpose;
(function (purpose) {
    purpose[purpose["benefits"] = 0] = "benefits";
    purpose[purpose["discovery"] = 1] = "discovery";
    purpose[purpose["validation"] = 2] = "validation";
})(purpose = exports.purpose || (exports.purpose = {}));
//# sourceMappingURL=CoverageEligibilityRequest.js.map