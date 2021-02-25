"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gender = void 0;
/**
 * Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 */
class RelatedPerson {
}
exports.default = RelatedPerson;
/**
 * This is a RelatedPerson resource
 */
RelatedPerson.resourceType = "RelatedPerson";
/**
 * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
 */
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
    gender[gender["other"] = 2] = "other";
    gender[gender["unknown"] = 3] = "unknown";
})(gender = exports.gender || (exports.gender = {}));
//# sourceMappingURL=RelatedPerson.js.map