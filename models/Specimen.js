"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * A sample to be used for analysis.
 */
class Specimen {
}
exports.default = Specimen;
/**
 * This is a Specimen resource
 */
Specimen.resourceType = "Specimen";
/**
 * The availability of the specimen.
 */
var status;
(function (status) {
    status[status["available"] = 0] = "available";
    status[status["unavailable"] = 1] = "unavailable";
    status[status["unsatisfactory"] = 2] = "unsatisfactory";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=Specimen.js.map