"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gender = void 0;
/**
 * Demographics and other administrative information about an individual or animal receiving care or other health-related services.
 */
class Patient {
}
exports.default = Patient;
/**
 * This is a Patient resource
 */
Patient.resourceType = "Patient";
/**
 * Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.
 */
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
    gender[gender["other"] = 2] = "other";
    gender[gender["unknown"] = 3] = "unknown";
})(gender = exports.gender || (exports.gender = {}));
//# sourceMappingURL=Patient.js.map