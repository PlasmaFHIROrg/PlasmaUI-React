"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mode = void 0;
/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
class StructureMap_Structure {
}
exports.default = StructureMap_Structure;
/**
 * How the referenced structure is used in this mapping.
 */
var mode;
(function (mode) {
    mode[mode["source"] = 0] = "source";
    mode[mode["queried"] = 1] = "queried";
    mode[mode["target"] = 2] = "target";
    mode[mode["produced"] = 3] = "produced";
})(mode = exports.mode || (exports.mode = {}));
//# sourceMappingURL=StructureMap_Structure.js.map