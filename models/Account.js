"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.
 */
class Account {
}
exports.default = Account;
/**
 * This is a Account resource
 */
Account.resourceType = "Account";
/**
 * Indicates whether the account is presently used/usable or not.
 */
var status;
(function (status) {
    status[status["active"] = 0] = "active";
    status[status["inactive"] = 1] = "inactive";
    status[status["unknown"] = 2] = "unknown";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=Account.js.map