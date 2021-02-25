"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.role = void 0;
/**
 * Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.
 */
class Provenance_Entity {
}
exports.default = Provenance_Entity;
/**
 * How the entity was used during the activity.
 */
var role;
(function (role) {
    role[role["derivation"] = 0] = "derivation";
    role[role["revision"] = 1] = "revision";
    role[role["quotation"] = 2] = "quotation";
    role[role["source"] = 3] = "source";
    role[role["removal"] = 4] = "removal";
})(role = exports.role || (exports.role = {}));
//# sourceMappingURL=Provenance_Entity.js.map