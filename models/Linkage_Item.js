"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
/**
 * Identifies two or more records (resource instances) that refer to the same real-world "occurrence".
 */
class Linkage_Item {
}
exports.default = Linkage_Item;
/**
 * Distinguishes which item is "source of truth" (if any) and which items are no longer considered to be current representations.
 */
var type;
(function (type) {
    type[type["source"] = 0] = "source";
    type[type["alternate"] = 1] = "alternate";
    type[type["historical"] = 2] = "historical";
})(type = exports.type || (exports.type = {}));
//# sourceMappingURL=Linkage_Item.js.map