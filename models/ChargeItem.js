"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
 */
class ChargeItem {
}
exports.default = ChargeItem;
/**
 * This is a ChargeItem resource
 */
ChargeItem.resourceType = "ChargeItem";
/**
 * The current state of the ChargeItem.
 */
var status;
(function (status) {
    status[status["planned"] = 0] = "planned";
    status[status["billable"] = 1] = "billable";
    status[status["aborted"] = 2] = "aborted";
    status[status["billed"] = 3] = "billed";
    status[status["unknown"] = 4] = "unknown";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=ChargeItem.js.map