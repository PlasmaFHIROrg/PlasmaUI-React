"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
 */
class Encounter_Location {
}
exports.default = Encounter_Location;
/**
 * The status of the participants' presence at the specified location during the period specified. If the participant is no longer at the location, then the period will have an end date/time.
 */
var status;
(function (status) {
    status[status["planned"] = 0] = "planned";
    status[status["active"] = 1] = "active";
    status[status["reserved"] = 2] = "reserved";
    status[status["completed"] = 3] = "completed";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=Encounter_Location.js.map