"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.state = exports.type = void 0;
/**
 * Describes a measurement, calculation or setting capability of a medical device.
 */
class DeviceMetric_Calibration {
}
exports.default = DeviceMetric_Calibration;
/**
 * Describes the type of the calibration method.
 */
var type;
(function (type) {
    type[type["unspecified"] = 0] = "unspecified";
    type[type["offset"] = 1] = "offset";
    type[type["gain"] = 2] = "gain";
})(type = exports.type || (exports.type = {}));
/**
 * Describes the state of the calibration.
 */
var state;
(function (state) {
    state[state["calibrated"] = 0] = "calibrated";
    state[state["unspecified"] = 1] = "unspecified";
})(state = exports.state || (exports.state = {}));
//# sourceMappingURL=DeviceMetric_Calibration.js.map