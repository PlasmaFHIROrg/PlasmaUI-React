"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outcome = void 0;
/**
 * This resource provides the details including amount of a payment and allocates the payment items being paid.
 */
class PaymentReconciliation {
}
exports.default = PaymentReconciliation;
/**
 * This is a PaymentReconciliation resource
 */
PaymentReconciliation.resourceType = "PaymentReconciliation";
/**
 * The outcome of a request for a reconciliation.
 */
var outcome;
(function (outcome) {
    outcome[outcome["queued"] = 0] = "queued";
    outcome[outcome["complete"] = 1] = "complete";
    outcome[outcome["error"] = 2] = "error";
    outcome[outcome["partial"] = 3] = "partial";
})(outcome = exports.outcome || (exports.outcome = {}));
//# sourceMappingURL=PaymentReconciliation.js.map