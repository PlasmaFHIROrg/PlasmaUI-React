"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = exports.required = void 0;
/**
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 */
class Appointment_Participant {
}
exports.default = Appointment_Participant;
/**
 * Whether this participant is required to be present at the meeting. This covers a use-case where two doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.
 */
var required;
(function (required) {
    required[required["required"] = 0] = "required";
    required[required["optional"] = 1] = "optional";
})(required = exports.required || (exports.required = {}));
/**
 * Participation status of the actor.
 */
var status;
(function (status) {
    status[status["accepted"] = 0] = "accepted";
    status[status["declined"] = 1] = "declined";
    status[status["tentative"] = 2] = "tentative";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=Appointment_Participant.js.map