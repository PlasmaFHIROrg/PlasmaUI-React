"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = exports.listMode = exports.contextType = void 0;
/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
class StructureMap_Target {
}
exports.default = StructureMap_Target;
/**
 * How to interpret the context.
 */
var contextType;
(function (contextType) {
    contextType[contextType["type"] = 0] = "type";
    contextType[contextType["variable"] = 1] = "variable";
})(contextType = exports.contextType || (exports.contextType = {}));
/**
 * If field is a list, how to manage the list.
 */
var listMode;
(function (listMode) {
    listMode[listMode["first"] = 0] = "first";
    listMode[listMode["share"] = 1] = "share";
    listMode[listMode["last"] = 2] = "last";
    listMode[listMode["collate"] = 3] = "collate";
})(listMode = exports.listMode || (exports.listMode = {}));
/**
 * How the data is copied / created.
 */
var transform;
(function (transform) {
    transform[transform["create"] = 0] = "create";
    transform[transform["copy"] = 1] = "copy";
    transform[transform["truncate"] = 2] = "truncate";
    transform[transform["escape"] = 3] = "escape";
    transform[transform["cast"] = 4] = "cast";
    transform[transform["append"] = 5] = "append";
    transform[transform["translate"] = 6] = "translate";
    transform[transform["reference"] = 7] = "reference";
    transform[transform["dateOp"] = 8] = "dateOp";
    transform[transform["uuid"] = 9] = "uuid";
    transform[transform["pointer"] = 10] = "pointer";
    transform[transform["evaluate"] = 11] = "evaluate";
    transform[transform["cc"] = 12] = "cc";
    transform[transform["c"] = 13] = "c";
    transform[transform["qty"] = 14] = "qty";
    transform[transform["id"] = 15] = "id";
    transform[transform["cp"] = 16] = "cp";
})(transform = exports.transform || (exports.transform = {}));
//# sourceMappingURL=StructureMap_Target.js.map