"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 */
class Appointment {
}
exports.default = Appointment;
/**
 * This is a Appointment resource
 */
Appointment.resourceType = "Appointment";
/**
 * The overall status of the Appointment. Each of the participants has their own participation status which indicates their involvement in the process, however this status indicates the shared status.
 */
var status;
(function (status) {
    status[status["proposed"] = 0] = "proposed";
    status[status["pending"] = 1] = "pending";
    status[status["booked"] = 2] = "booked";
    status[status["arrived"] = 3] = "arrived";
    status[status["fulfilled"] = 4] = "fulfilled";
    status[status["cancelled"] = 5] = "cancelled";
    status[status["noshow"] = 6] = "noshow";
    status[status["waitlist"] = 7] = "waitlist";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=Appointment.js.map