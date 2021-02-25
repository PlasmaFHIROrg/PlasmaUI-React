"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gender = void 0;
/**
 * A person who is directly or indirectly involved in the provisioning of healthcare.
 */
class Practitioner {
}
exports.default = Practitioner;
/**
 * This is a Practitioner resource
 */
Practitioner.resourceType = "Practitioner";
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
//# sourceMappingURL=Practitioner.js.map