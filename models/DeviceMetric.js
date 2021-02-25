"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.category = exports.color = exports.operationalStatus = void 0;
/**
 * Describes a measurement, calculation or setting capability of a medical device.
 */
class DeviceMetric {
}
exports.default = DeviceMetric;
/**
 * This is a DeviceMetric resource
 */
DeviceMetric.resourceType = "DeviceMetric";
/**
 * Indicates current operational state of the device. For example: On, Off, Standby, etc.
 */
var operationalStatus;
(function (operationalStatus) {
    operationalStatus[operationalStatus["on"] = 0] = "on";
    operationalStatus[operationalStatus["off"] = 1] = "off";
    operationalStatus[operationalStatus["standby"] = 2] = "standby";
})(operationalStatus = exports.operationalStatus || (exports.operationalStatus = {}));
/**
 * Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
 */
var color;
(function (color) {
    color[color["black"] = 0] = "black";
    color[color["red"] = 1] = "red";
    color[color["green"] = 2] = "green";
    color[color["yellow"] = 3] = "yellow";
    color[color["blue"] = 4] = "blue";
    color[color["magenta"] = 5] = "magenta";
    color[color["cyan"] = 6] = "cyan";
    color[color["white"] = 7] = "white";
})(color = exports.color || (exports.color = {}));
/**
 * Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
 */
var category;
(function (category) {
    category[category["measurement"] = 0] = "measurement";
    category[category["setting"] = 1] = "setting";
    category[category["calculation"] = 2] = "calculation";
    category[category["unspecified"] = 3] = "unspecified";
})(category = exports.category || (exports.category = {}));
//# sourceMappingURL=DeviceMetric.js.map