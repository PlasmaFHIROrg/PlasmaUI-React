"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.versioning = exports.aggregation = void 0;
/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
class ElementDefinition_Type {
}
exports.default = ElementDefinition_Type;
/**
 * If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.
 */
var aggregation;
(function (aggregation) {
    aggregation[aggregation["contained"] = 0] = "contained";
    aggregation[aggregation["referenced"] = 1] = "referenced";
    aggregation[aggregation["bundled"] = 2] = "bundled";
})(aggregation = exports.aggregation || (exports.aggregation = {}));
/**
 * Whether this reference needs to be version specific or version independent, or whether either can be used.
 */
var versioning;
(function (versioning) {
    versioning[versioning["either"] = 0] = "either";
    versioning[versioning["independent"] = 1] = "independent";
    versioning[versioning["specific"] = 2] = "specific";
})(versioning = exports.versioning || (exports.versioning = {}));
//# sourceMappingURL=ElementDefinition_Type.js.map