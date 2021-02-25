"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mode = void 0;
/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
class CapabilityStatement_SupportedMessage {
}
exports.default = CapabilityStatement_SupportedMessage;
/**
 * The mode of this event declaration - whether application is sender or receiver.
 */
var mode;
(function (mode) {
    mode[mode["sender"] = 0] = "sender";
    mode[mode["receiver"] = 1] = "receiver";
})(mode = exports.mode || (exports.mode = {}));
//# sourceMappingURL=CapabilityStatement_SupportedMessage.js.map