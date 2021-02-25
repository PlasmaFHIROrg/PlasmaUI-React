"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gender = void 0;
/**
 * Demographics and administrative information about a person independent of a specific health-related context.
 */
class Person {
}
exports.default = Person;
/**
 * This is a Person resource
 */
Person.resourceType = "Person";
/**
 * Administrative Gender.
 */
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
    gender[gender["other"] = 2] = "other";
    gender[gender["unknown"] = 3] = "unknown";
})(gender = exports.gender || (exports.gender = {}));
//# sourceMappingURL=Person.js.map