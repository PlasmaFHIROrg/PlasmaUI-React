"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
class InsurancePlan {
}
exports.default = InsurancePlan;
/**
 * This is a InsurancePlan resource
 */
InsurancePlan.resourceType = "InsurancePlan";
/**
 * The current state of the health insurance product.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=InsurancePlan.js.map