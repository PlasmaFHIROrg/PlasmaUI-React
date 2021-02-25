"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 */
class Device {
}
exports.default = Device;
/**
 * This is a Device resource
 */
Device.resourceType = "Device";
/**
 * Status of the Device availability.
 */
var status;
(function (status) {
    status[status["active"] = 0] = "active";
    status[status["inactive"] = 1] = "inactive";
    status[status["unknown"] = 2] = "unknown";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=Device.js.map