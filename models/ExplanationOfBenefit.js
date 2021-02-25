"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 */
class ExplanationOfBenefit {
}
exports.default = ExplanationOfBenefit;
/**
 * This is a ExplanationOfBenefit resource
 */
ExplanationOfBenefit.resourceType = "ExplanationOfBenefit";
/**
 * The status of the resource instance.
 */
var status;
(function (status) {
    status[status["active"] = 0] = "active";
    status[status["cancelled"] = 1] = "cancelled";
    status[status["draft"] = 2] = "draft";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=ExplanationOfBenefit.js.map