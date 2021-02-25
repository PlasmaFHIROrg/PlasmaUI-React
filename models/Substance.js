"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * A homogeneous material with a definite composition.
 */
class Substance {
}
exports.default = Substance;
/**
 * This is a Substance resource
 */
Substance.resourceType = "Substance";
/**
 * A code to indicate if the substance is actively used.
 */
var status;
(function (status) {
    status[status["active"] = 0] = "active";
    status[status["inactive"] = 1] = "inactive";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=Substance.js.map