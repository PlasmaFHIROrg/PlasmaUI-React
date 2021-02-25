"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies.
 */
class EffectEvidenceSynthesis {
}
exports.default = EffectEvidenceSynthesis;
/**
 * This is a EffectEvidenceSynthesis resource
 */
EffectEvidenceSynthesis.resourceType = "EffectEvidenceSynthesis";
/**
 * The status of this effect evidence synthesis. Enables tracking the life-cycle of the content.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=EffectEvidenceSynthesis.js.map