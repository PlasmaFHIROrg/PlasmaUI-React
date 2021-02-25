"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.
 */
class RiskEvidenceSynthesis {
}
exports.default = RiskEvidenceSynthesis;
/**
 * This is a RiskEvidenceSynthesis resource
 */
RiskEvidenceSynthesis.resourceType = "RiskEvidenceSynthesis";
/**
 * The status of this risk evidence synthesis. Enables tracking the life-cycle of the content.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=RiskEvidenceSynthesis.js.map