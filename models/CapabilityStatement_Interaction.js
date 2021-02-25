"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.code = void 0;
/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
class CapabilityStatement_Interaction {
}
exports.default = CapabilityStatement_Interaction;
/**
 * Coded identifier of the operation, supported by the system resource.
 */
var code;
(function (code) {
    code[code["read"] = 0] = "read";
    code[code["vread"] = 1] = "vread";
    code[code["update"] = 2] = "update";
    code[code["patch"] = 3] = "patch";
    code[code["create"] = 4] = "create";
})(code = exports.code || (exports.code = {}));
//# sourceMappingURL=CapabilityStatement_Interaction.js.map