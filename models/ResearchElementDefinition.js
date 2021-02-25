"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variableType = exports.type = exports.status = void 0;
/**
 * The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 */
class ResearchElementDefinition {
}
exports.default = ResearchElementDefinition;
/**
 * This is a ResearchElementDefinition resource
 */
ResearchElementDefinition.resourceType = "ResearchElementDefinition";
/**
 * The status of this research element definition. Enables tracking the life-cycle of the content.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
/**
 * The type of research element, a population, an exposure, or an outcome.
 */
var type;
(function (type) {
    type[type["population"] = 0] = "population";
    type[type["exposure"] = 1] = "exposure";
    type[type["outcome"] = 2] = "outcome";
})(type = exports.type || (exports.type = {}));
/**
 * The type of the outcome (e.g. Dichotomous, Continuous, or Descriptive).
 */
var variableType;
(function (variableType) {
    variableType[variableType["dichotomous"] = 0] = "dichotomous";
    variableType[variableType["continuous"] = 1] = "continuous";
    variableType[variableType["descriptive"] = 2] = "descriptive";
})(variableType = exports.variableType || (exports.variableType = {}));
//# sourceMappingURL=ResearchElementDefinition.js.map