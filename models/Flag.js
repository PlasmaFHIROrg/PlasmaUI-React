"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * Prospective warnings of potential issues when providing care to the patient.
 */
class Flag {
}
exports.default = Flag;
/**
 * This is a Flag resource
 */
Flag.resourceType = "Flag";
/**
 * Supports basic workflow.
 */
var status;
(function (status) {
    status[status["active"] = 0] = "active";
    status[status["inactive"] = 1] = "inactive";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=Flag.js.map