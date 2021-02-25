"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
/**
 * Raw data describing a biological sequence.
 */
class MolecularSequence {
}
exports.default = MolecularSequence;
/**
 * This is a MolecularSequence resource
 */
MolecularSequence.resourceType = "MolecularSequence";
/**
 * Amino Acid Sequence/ DNA Sequence / RNA Sequence.
 */
var type;
(function (type) {
    type[type["aa"] = 0] = "aa";
    type[type["dna"] = 1] = "dna";
    type[type["rna"] = 2] = "rna";
})(type = exports.type || (exports.type = {}));
//# sourceMappingURL=MolecularSequence.js.map