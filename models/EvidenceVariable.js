"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = exports.status = void 0;
/**
 * The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 */
class EvidenceVariable {
}
exports.default = EvidenceVariable;
/**
 * This is a EvidenceVariable resource
 */
EvidenceVariable.resourceType = "EvidenceVariable";
/**
 * The status of this evidence variable. Enables tracking the life-cycle of the content.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
/**
 * The type of evidence element, a population, an exposure, or an outcome.
 */
var type;
(function (type) {
    type[type["dichotomous"] = 0] = "dichotomous";
    type[type["continuous"] = 1] = "continuous";
    type[type["descriptive"] = 2] = "descriptive";
})(type = exports.type || (exports.type = {}));
//# sourceMappingURL=EvidenceVariable.js.map