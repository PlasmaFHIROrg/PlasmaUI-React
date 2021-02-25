"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kind = exports.status = void 0;
/**
 * A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.
 */
class NamingSystem {
}
exports.default = NamingSystem;
/**
 * This is a NamingSystem resource
 */
NamingSystem.resourceType = "NamingSystem";
/**
 * The status of this naming system. Enables tracking the life-cycle of the content.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
/**
 * Indicates the purpose for the naming system - what kinds of things does it make unique?
 */
var kind;
(function (kind) {
    kind[kind["codesystem"] = 0] = "codesystem";
    kind[kind["identifier"] = 1] = "identifier";
    kind[kind["root"] = 2] = "root";
})(kind = exports.kind || (exports.kind = {}));
//# sourceMappingURL=NamingSystem.js.map