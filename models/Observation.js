"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * Measurements and simple assertions made about a patient, device or other subject.
 */
class Observation {
}
exports.default = Observation;
/**
 * This is a Observation resource
 */
Observation.resourceType = "Observation";
/**
 * The status of the result value.
 */
var status;
(function (status) {
    status[status["registered"] = 0] = "registered";
    status[status["preliminary"] = 1] = "preliminary";
    status[status["final"] = 2] = "final";
    status[status["amended"] = 3] = "amended";
    status[status["corrected"] = 4] = "corrected";
    status[status["cancelled"] = 5] = "cancelled";
    status[status["unknown"] = 6] = "unknown";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=Observation.js.map