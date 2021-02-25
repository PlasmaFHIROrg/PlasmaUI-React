"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gender = exports.category = void 0;
/**
 * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
 */
class ObservationDefinition_QualifiedInterval {
}
exports.default = ObservationDefinition_QualifiedInterval;
/**
 * The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition.
 */
var category;
(function (category) {
    category[category["reference"] = 0] = "reference";
    category[category["critical"] = 1] = "critical";
    category[category["absolute"] = 2] = "absolute";
})(category = exports.category || (exports.category = {}));
/**
 * Sex of the population the range applies to.
 */
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
    gender[gender["other"] = 2] = "other";
    gender[gender["unknown"] = 3] = "unknown";
})(gender = exports.gender || (exports.gender = {}));
//# sourceMappingURL=ObservationDefinition_QualifiedInterval.js.map