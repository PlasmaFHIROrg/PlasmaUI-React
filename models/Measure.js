"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * The Measure resource provides the definition of a quality measure.
 */
class Measure {
}
exports.default = Measure;
/**
 * This is a Measure resource
 */
Measure.resourceType = "Measure";
/**
 * The status of this measure. Enables tracking the life-cycle of the content.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=Measure.js.map