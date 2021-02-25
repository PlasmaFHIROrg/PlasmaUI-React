"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
 */
class Encounter_StatusHistory {
}
exports.default = Encounter_StatusHistory;
/**
 * planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
 */
var status;
(function (status) {
    status[status["planned"] = 0] = "planned";
    status[status["arrived"] = 1] = "arrived";
    status[status["triaged"] = 2] = "triaged";
    status[status["onleave"] = 3] = "onleave";
    status[status["finished"] = 4] = "finished";
    status[status["cancelled"] = 5] = "cancelled";
    status[status["unknown"] = 6] = "unknown";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=Encounter_StatusHistory.js.map