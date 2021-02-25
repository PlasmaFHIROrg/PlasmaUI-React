"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 */
class EpisodeOfCare_StatusHistory {
}
exports.default = EpisodeOfCare_StatusHistory;
/**
 * planned | waitlist | active | onhold | finished | cancelled.
 */
var status;
(function (status) {
    status[status["planned"] = 0] = "planned";
    status[status["waitlist"] = 1] = "waitlist";
    status[status["active"] = 2] = "active";
    status[status["onhold"] = 3] = "onhold";
    status[status["finished"] = 4] = "finished";
    status[status["cancelled"] = 5] = "cancelled";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=EpisodeOfCare_StatusHistory.js.map