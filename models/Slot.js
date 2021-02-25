"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * A slot of time on a schedule that may be available for booking appointments.
 */
class Slot {
}
exports.default = Slot;
/**
 * This is a Slot resource
 */
Slot.resourceType = "Slot";
/**
 * busy | free | busy-unavailable | busy-tentative | entered-in-error.
 */
var status;
(function (status) {
    status[status["busy"] = 0] = "busy";
    status[status["free"] = 1] = "free";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=Slot.js.map