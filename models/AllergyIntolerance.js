"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criticality = exports.category = exports.type = void 0;
/**
 * Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.
 */
class AllergyIntolerance {
}
exports.default = AllergyIntolerance;
/**
 * This is a AllergyIntolerance resource
 */
AllergyIntolerance.resourceType = "AllergyIntolerance";
/**
 * Identification of the underlying physiological mechanism for the reaction risk.
 */
var type;
(function (type) {
    type[type["allergy"] = 0] = "allergy";
    type[type["intolerance"] = 1] = "intolerance";
})(type = exports.type || (exports.type = {}));
/**
 * Category of the identified substance.
 */
var category;
(function (category) {
    category[category["food"] = 0] = "food";
    category[category["medication"] = 1] = "medication";
    category[category["environment"] = 2] = "environment";
    category[category["biologic"] = 3] = "biologic";
})(category = exports.category || (exports.category = {}));
/**
 * Estimate of the potential clinical harm, or seriousness, of the reaction to the identified substance.
 */
var criticality;
(function (criticality) {
    criticality[criticality["low"] = 0] = "low";
    criticality[criticality["high"] = 1] = "high";
})(criticality = exports.criticality || (exports.criticality = {}));
//# sourceMappingURL=AllergyIntolerance.js.map