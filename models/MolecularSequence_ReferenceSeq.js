"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strand = exports.orientation = void 0;
/**
 * Raw data describing a biological sequence.
 */
class MolecularSequence_ReferenceSeq {
}
exports.default = MolecularSequence_ReferenceSeq;
/**
 * A relative reference to a DNA strand based on gene orientation. The strand that contains the open reading frame of the gene is the "sense" strand, and the opposite complementary strand is the "antisense" strand.
 */
var orientation;
(function (orientation) {
    orientation[orientation["sense"] = 0] = "sense";
    orientation[orientation["antisense"] = 1] = "antisense";
})(orientation = exports.orientation || (exports.orientation = {}));
/**
 * An absolute reference to a strand. The Watson strand is the strand whose 5'-end is on the short arm of the chromosome, and the Crick strand as the one whose 5'-end is on the long arm.
 */
var strand;
(function (strand) {
    strand[strand["watson"] = 0] = "watson";
    strand[strand["crick"] = 1] = "crick";
})(strand = exports.strand || (exports.strand = {}));
//# sourceMappingURL=MolecularSequence_ReferenceSeq.js.map