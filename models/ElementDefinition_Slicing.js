"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rules = void 0;
/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
class ElementDefinition_Slicing {
}
exports.default = ElementDefinition_Slicing;
/**
 * Whether additional slices are allowed or not. When the slices are ordered, profile authors can also say that additional slices are only allowed at the end.
 */
var rules;
(function (rules) {
    rules[rules["closed"] = 0] = "closed";
    rules[rules["open"] = 1] = "open";
    rules[rules["openAtEnd"] = 2] = "openAtEnd";
})(rules = exports.rules || (exports.rules = {}));
//# sourceMappingURL=ElementDefinition_Slicing.js.map