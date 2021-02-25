"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
/**
 * Related artifacts such as additional documentation, justification, or bibliographic references.
 */
class RelatedArtifact {
}
exports.default = RelatedArtifact;
/**
 * The type of relationship to the related artifact.
 */
var type;
(function (type) {
    type[type["documentation"] = 0] = "documentation";
    type[type["justification"] = 1] = "justification";
    type[type["citation"] = 2] = "citation";
    type[type["predecessor"] = 3] = "predecessor";
    type[type["successor"] = 4] = "successor";
})(type = exports.type || (exports.type = {}));
//# sourceMappingURL=RelatedArtifact.js.map