"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generation = void 0;
/**
 * A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
 */
class ImplementationGuide_Page {
}
exports.default = ImplementationGuide_Page;
/**
 * A code that indicates how the page is generated.
 */
var generation;
(function (generation) {
    generation[generation["html"] = 0] = "html";
    generation[generation["markdown"] = 1] = "markdown";
    generation[generation["xml"] = 2] = "xml";
    generation[generation["generated"] = 3] = "generated";
})(generation = exports.generation || (exports.generation = {}));
//# sourceMappingURL=ImplementationGuide_Page.js.map