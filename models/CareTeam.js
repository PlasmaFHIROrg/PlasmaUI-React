"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient.
 */
class CareTeam {
}
exports.default = CareTeam;
/**
 * This is a CareTeam resource
 */
CareTeam.resourceType = "CareTeam";
/**
 * Indicates the current state of the care team.
 */
var status;
(function (status) {
    status[status["proposed"] = 0] = "proposed";
    status[status["active"] = 1] = "active";
    status[status["suspended"] = 2] = "suspended";
    status[status["inactive"] = 3] = "inactive";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=CareTeam.js.map