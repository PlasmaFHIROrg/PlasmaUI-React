"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
/**
 * A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
class Claim {
}
exports.default = Claim;
/**
 * This is a Claim resource
 */
Claim.resourceType = "Claim";
/**
 * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
 */
var use;
(function (use) {
    use[use["claim"] = 0] = "claim";
    use[use["preauthorization"] = 1] = "preauthorization";
    use[use["predetermination"] = 2] = "predetermination";
})(use = exports.use || (exports.use = {}));
//# sourceMappingURL=Claim.js.map