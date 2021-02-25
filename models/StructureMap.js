"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
class StructureMap {
}
exports.default = StructureMap;
/**
 * This is a StructureMap resource
 */
StructureMap.resourceType = "StructureMap";
/**
 * The status of this structure map. Enables tracking the life-cycle of the content.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=StructureMap.js.map