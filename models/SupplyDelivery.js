"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * Record of delivery of what is supplied.
 */
class SupplyDelivery {
}
exports.default = SupplyDelivery;
/**
 * This is a SupplyDelivery resource
 */
SupplyDelivery.resourceType = "SupplyDelivery";
/**
 * A code specifying the state of the dispense event.
 */
var status;
(function (status) {
    status[status["completed"] = 0] = "completed";
    status[status["abandoned"] = 1] = "abandoned";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=SupplyDelivery.js.map