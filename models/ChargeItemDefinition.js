"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.
 */
class ChargeItemDefinition {
}
exports.default = ChargeItemDefinition;
/**
 * This is a ChargeItemDefinition resource
 */
ChargeItemDefinition.resourceType = "ChargeItemDefinition";
/**
 * The current state of the ChargeItemDefinition.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=ChargeItemDefinition.js.map