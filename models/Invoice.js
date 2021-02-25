"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 */
class Invoice {
}
exports.default = Invoice;
/**
 * This is a Invoice resource
 */
Invoice.resourceType = "Invoice";
/**
 * The current state of the Invoice.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["issued"] = 1] = "issued";
    status[status["balanced"] = 2] = "balanced";
    status[status["cancelled"] = 3] = "cancelled";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=Invoice.js.map