"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
/**
 * Raw data describing a biological sequence.
 */
class MolecularSequence_Quality {
}
exports.default = MolecularSequence_Quality;
/**
 * INDEL / SNP / Undefined variant.
 */
var type;
(function (type) {
    type[type["indel"] = 0] = "indel";
    type[type["snp"] = 1] = "snp";
    type[type["unknown"] = 2] = "unknown";
})(type = exports.type || (exports.type = {}));
//# sourceMappingURL=MolecularSequence_Quality.js.map