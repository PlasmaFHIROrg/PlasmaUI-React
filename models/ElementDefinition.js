"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.representation = void 0;
/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
class ElementDefinition {
}
exports.default = ElementDefinition;
/**
 * Codes that define how this element is represented in instances, when the deviation varies from the normal case.
 */
var representation;
(function (representation) {
    representation[representation["xmlAttr"] = 0] = "xmlAttr";
    representation[representation["xmlText"] = 1] = "xmlText";
    representation[representation["typeAttr"] = 2] = "typeAttr";
    representation[representation["cdaText"] = 3] = "cdaText";
    representation[representation["xhtml"] = 4] = "xhtml";
})(representation = exports.representation || (exports.representation = {}));
//# sourceMappingURL=ElementDefinition.js.map