"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 */
class Composition {
}
exports.default = Composition;
/**
 * This is a Composition resource
 */
Composition.resourceType = "Composition";
/**
 * The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document.
 */
var status;
(function (status) {
    status[status["preliminary"] = 0] = "preliminary";
    status[status["final"] = 1] = "final";
    status[status["amended"] = 2] = "amended";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=Composition.js.map