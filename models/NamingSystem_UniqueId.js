"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
/**
 * A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.
 */
class NamingSystem_UniqueId {
}
exports.default = NamingSystem_UniqueId;
/**
 * Identifies the unique identifier scheme used for this particular identifier.
 */
var type;
(function (type) {
    type[type["oid"] = 0] = "oid";
    type[type["uuid"] = 1] = "uuid";
    type[type["uri"] = 2] = "uri";
    type[type["other"] = 3] = "other";
})(type = exports.type || (exports.type = {}));
//# sourceMappingURL=NamingSystem_UniqueId.js.map