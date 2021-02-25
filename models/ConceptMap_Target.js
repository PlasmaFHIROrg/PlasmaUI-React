"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equivalence = void 0;
/**
 * A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
 */
class ConceptMap_Target {
}
exports.default = ConceptMap_Target;
/**
 * The equivalence between the source and target concepts (counting for the dependencies and products). The equivalence is read from target to source (e.g. the target is 'wider' than the source).
 */
var equivalence;
(function (equivalence) {
    equivalence[equivalence["relatedto"] = 0] = "relatedto";
    equivalence[equivalence["equivalent"] = 1] = "equivalent";
    equivalence[equivalence["equal"] = 2] = "equal";
    equivalence[equivalence["wider"] = 3] = "wider";
    equivalence[equivalence["subsumes"] = 4] = "subsumes";
    equivalence[equivalence["narrower"] = 5] = "narrower";
    equivalence[equivalence["specializes"] = 6] = "specializes";
    equivalence[equivalence["inexact"] = 7] = "inexact";
    equivalence[equivalence["unmatched"] = 8] = "unmatched";
    equivalence[equivalence["disjoint"] = 9] = "disjoint";
})(equivalence = exports.equivalence || (exports.equivalence = {}));
//# sourceMappingURL=ConceptMap_Target.js.map