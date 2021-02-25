"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.derivation = exports.kind = exports.fhirVersion = exports.status = void 0;
/**
 * A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.
 */
class StructureDefinition {
}
exports.default = StructureDefinition;
/**
 * This is a StructureDefinition resource
 */
StructureDefinition.resourceType = "StructureDefinition";
/**
 * The status of this structure definition. Enables tracking the life-cycle of the content.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
/**
 * The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 4.0.0. for this version.
 */
var fhirVersion;
(function (fhirVersion) {
})(fhirVersion = exports.fhirVersion || (exports.fhirVersion = {}));
/**
 * Defines the kind of structure that this definition is describing.
 */
var kind;
(function (kind) {
    kind[kind["resource"] = 0] = "resource";
    kind[kind["logical"] = 1] = "logical";
})(kind = exports.kind || (exports.kind = {}));
/**
 * How the type relates to the baseDefinition.
 */
var derivation;
(function (derivation) {
    derivation[derivation["specialization"] = 0] = "specialization";
    derivation[derivation["constraint"] = 1] = "constraint";
})(derivation = exports.derivation || (exports.derivation = {}));
//# sourceMappingURL=StructureDefinition.js.map