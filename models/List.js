"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mode = exports.status = void 0;
/**
 * A list is a curated collection of resources.
 */
class List {
}
exports.default = List;
/**
 * This is a List resource
 */
List.resourceType = "List";
/**
 * Indicates the current state of this list.
 */
var status;
(function (status) {
    status[status["current"] = 0] = "current";
    status[status["retired"] = 1] = "retired";
})(status = exports.status || (exports.status = {}));
/**
 * How this list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.
 */
var mode;
(function (mode) {
    mode[mode["working"] = 0] = "working";
    mode[mode["snapshot"] = 1] = "snapshot";
    mode[mode["changes"] = 2] = "changes";
})(mode = exports.mode || (exports.mode = {}));
//# sourceMappingURL=List.js.map