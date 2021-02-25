"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * Significant health conditions for a person related to the patient relevant in the context of care for the patient.
 */
class FamilyMemberHistory {
}
exports.default = FamilyMemberHistory;
/**
 * This is a FamilyMemberHistory resource
 */
FamilyMemberHistory.resourceType = "FamilyMemberHistory";
/**
 * A code specifying the status of the record of the family history of a specific family member.
 */
var status;
(function (status) {
    status[status["partial"] = 0] = "partial";
    status[status["completed"] = 1] = "completed";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=FamilyMemberHistory.js.map