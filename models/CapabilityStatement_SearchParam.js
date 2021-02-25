"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
class CapabilityStatement_SearchParam {
}
exports.default = CapabilityStatement_SearchParam;
/**
 * The type of value a search parameter refers to, and how the content is interpreted.
 */
var type;
(function (type) {
    type[type["number"] = 0] = "number";
    type[type["date"] = 1] = "date";
    type[type["string"] = 2] = "string";
    type[type["token"] = 3] = "token";
    type[type["reference"] = 4] = "reference";
    type[type["composite"] = 5] = "composite";
    type[type["quantity"] = 6] = "quantity";
    type[type["uri"] = 7] = "uri";
    type[type["special"] = 8] = "special";
})(type = exports.type || (exports.type = {}));
//# sourceMappingURL=CapabilityStatement_SearchParam.js.map