"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mode = void 0;
/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
class CapabilityStatement_Document {
}
exports.default = CapabilityStatement_Document;
/**
 * Mode of this document declaration - whether an application is a producer or consumer.
 */
var mode;
(function (mode) {
    mode[mode["producer"] = 0] = "producer";
    mode[mode["consumer"] = 1] = "consumer";
})(mode = exports.mode || (exports.mode = {}));
//# sourceMappingURL=CapabilityStatement_Document.js.map