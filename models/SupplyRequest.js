"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * A record of a request for a medication, substance or device used in the healthcare setting.
 */
class SupplyRequest {
}
exports.default = SupplyRequest;
/**
 * This is a SupplyRequest resource
 */
SupplyRequest.resourceType = "SupplyRequest";
/**
 * Status of the supply request.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["suspended"] = 2] = "suspended";
    status[status["cancelled"] = 3] = "cancelled";
    status[status["completed"] = 4] = "completed";
    status[status["unknown"] = 5] = "unknown";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=SupplyRequest.js.map