"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mode = void 0;
/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
class CapabilityStatement_Rest {
}
exports.default = CapabilityStatement_Rest;
/**
 * Identifies whether this portion of the statement is describing the ability to initiate or receive restful operations.
 */
var mode;
(function (mode) {
    mode[mode["client"] = 0] = "client";
    mode[mode["server"] = 1] = "server";
})(mode = exports.mode || (exports.mode = {}));
//# sourceMappingURL=CapabilityStatement_Rest.js.map