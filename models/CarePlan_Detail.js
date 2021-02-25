"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 */
class CarePlan_Detail {
}
exports.default = CarePlan_Detail;
/**
 * Identifies what progress is being made for the specific activity.
 */
var status;
(function (status) {
    status[status["scheduled"] = 0] = "scheduled";
    status[status["completed"] = 1] = "completed";
    status[status["cancelled"] = 2] = "cancelled";
    status[status["stopped"] = 3] = "stopped";
    status[status["unknown"] = 4] = "unknown";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=CarePlan_Detail.js.map