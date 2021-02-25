"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mode = void 0;
/**
 * A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 */
class Composition_Attester {
}
exports.default = Composition_Attester;
/**
 * The type of attestation the authenticator offers.
 */
var mode;
(function (mode) {
    mode[mode["personal"] = 0] = "personal";
    mode[mode["professional"] = 1] = "professional";
    mode[mode["legal"] = 2] = "legal";
    mode[mode["official"] = 3] = "official";
})(mode = exports.mode || (exports.mode = {}));
//# sourceMappingURL=Composition_Attester.js.map