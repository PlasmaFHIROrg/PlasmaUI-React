"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
 */
class DeviceUseStatement {
}
exports.default = DeviceUseStatement;
/**
 * This is a DeviceUseStatement resource
 */
DeviceUseStatement.resourceType = "DeviceUseStatement";
/**
 * A code representing the patient or other source's judgment about the state of the device used that this statement is about.  Generally this will be active or completed.
 */
var status;
(function (status) {
    status[status["active"] = 0] = "active";
    status[status["completed"] = 1] = "completed";
    status[status["intended"] = 2] = "intended";
    status[status["stopped"] = 3] = "stopped";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=DeviceUseStatement.js.map