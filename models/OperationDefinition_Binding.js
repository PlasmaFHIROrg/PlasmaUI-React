"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strength = void 0;
/**
 * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
 */
class OperationDefinition_Binding {
}
exports.default = OperationDefinition_Binding;
/**
 * Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.
 */
var strength;
(function (strength) {
    strength[strength["required"] = 0] = "required";
    strength[strength["extensible"] = 1] = "extensible";
    strength[strength["preferred"] = 2] = "preferred";
    strength[strength["example"] = 3] = "example";
})(strength = exports.strength || (exports.strength = {}));
//# sourceMappingURL=OperationDefinition_Binding.js.map