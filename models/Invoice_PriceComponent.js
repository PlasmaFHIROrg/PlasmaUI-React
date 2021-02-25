"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
/**
 * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 */
class Invoice_PriceComponent {
}
exports.default = Invoice_PriceComponent;
/**
 * This code identifies the type of the component.
 */
var type;
(function (type) {
    type[type["base"] = 0] = "base";
    type[type["surcharge"] = 1] = "surcharge";
    type[type["deduction"] = 2] = "deduction";
    type[type["discount"] = 3] = "discount";
    type[type["tax"] = 4] = "tax";
    type[type["informational"] = 5] = "informational";
})(type = exports.type || (exports.type = {}));
//# sourceMappingURL=Invoice_PriceComponent.js.map