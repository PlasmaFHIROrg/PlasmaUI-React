"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listMode = void 0;
/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
class StructureMap_Source {
}
exports.default = StructureMap_Source;
/**
 * How to handle the list mode for this element.
 */
var listMode;
(function (listMode) {
    listMode[listMode["first"] = 0] = "first";
    listMode[listMode["not_first"] = 1] = "not_first";
    listMode[listMode["last"] = 2] = "last";
    listMode[listMode["not_last"] = 3] = "not_last";
    listMode[listMode["only_one"] = 4] = "only_one";
})(listMode = exports.listMode || (exports.listMode = {}));
//# sourceMappingURL=StructureMap_Source.js.map