"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
/**
 * A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.
 */
class StructureDefinition_Context {
}
exports.default = StructureDefinition_Context;
/**
 * Defines how to interpret the expression that defines what the context of the extension is.
 */
var type;
(function (type) {
    type[type["fhirpath"] = 0] = "fhirpath";
    type[type["element"] = 1] = "element";
    type[type["extension"] = 2] = "extension";
})(type = exports.type || (exports.type = {}));
//# sourceMappingURL=StructureDefinition_Context.js.map