"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mode = void 0;
/**
 * A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
 */
class ConceptMap_Unmapped {
}
exports.default = ConceptMap_Unmapped;
/**
 * Defines which action to take if there is no match for the source concept in the target system designated for the group. One of 3 actions are possible: use the unmapped code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL).
 */
var mode;
(function (mode) {
    mode[mode["provided"] = 0] = "provided";
    mode[mode["fixed"] = 1] = "fixed";
})(mode = exports.mode || (exports.mode = {}));
//# sourceMappingURL=ConceptMap_Unmapped.js.map