"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
/**
 * A container for a collection of resources.
 */
class Bundle {
}
exports.default = Bundle;
/**
 * This is a Bundle resource
 */
Bundle.resourceType = "Bundle";
/**
 * Indicates the purpose of this bundle - how it is intended to be used.
 */
var type;
(function (type) {
    type[type["document"] = 0] = "document";
    type[type["message"] = 1] = "message";
    type[type["transaction"] = 2] = "transaction";
    type[type["batch"] = 3] = "batch";
    type[type["history"] = 4] = "history";
    type[type["searchset"] = 5] = "searchset";
    type[type["collection"] = 6] = "collection";
})(type = exports.type || (exports.type = {}));
//# sourceMappingURL=Bundle.js.map