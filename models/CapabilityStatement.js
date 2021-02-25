"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fhirVersion = exports.kind = exports.status = void 0;
/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
class CapabilityStatement {
}
exports.default = CapabilityStatement;
/**
 * This is a CapabilityStatement resource
 */
CapabilityStatement.resourceType = "CapabilityStatement";
/**
 * The status of this capability statement. Enables tracking the life-cycle of the content.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
/**
 * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
 */
var kind;
(function (kind) {
    kind[kind["instance"] = 0] = "instance";
    kind[kind["capability"] = 1] = "capability";
    kind[kind["requirements"] = 2] = "requirements";
})(kind = exports.kind || (exports.kind = {}));
/**
 * The version of the FHIR specification that this CapabilityStatement describes (which SHALL be the same as the FHIR version of the CapabilityStatement itself). There is no default value.
 */
var fhirVersion;
(function (fhirVersion) {
})(fhirVersion = exports.fhirVersion || (exports.fhirVersion = {}));
//# sourceMappingURL=CapabilityStatement.js.map