"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
/**
 * Demographics and other administrative information about an individual or animal receiving care or other health-related services.
 */
class Patient_Link {
}
exports.default = Patient_Link;
/**
 * The type of link between this patient resource and another patient resource.
 */
var type;
(function (type) {
    type[type["replaces"] = 0] = "replaces";
    type[type["refer"] = 1] = "refer";
    type[type["seealso"] = 2] = "seealso";
})(type = exports.type || (exports.type = {}));
//# sourceMappingURL=Patient_Link.js.map