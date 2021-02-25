"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rule = exports.use = void 0;
/**
 * A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.
 */
class GraphDefinition_Compartment {
}
exports.default = GraphDefinition_Compartment;
/**
 * Defines how the compartment rule is used - whether it it is used to test whether resources are subject to the rule, or whether it is a rule that must be followed.
 */
var use;
(function (use) {
    use[use["condition"] = 0] = "condition";
    use[use["requirement"] = 1] = "requirement";
})(use = exports.use || (exports.use = {}));
/**
 * identical | matching | different | no-rule | custom.
 */
var rule;
(function (rule) {
    rule[rule["identical"] = 0] = "identical";
    rule[rule["matching"] = 1] = "matching";
    rule[rule["different"] = 2] = "different";
    rule[rule["custom"] = 3] = "custom";
})(rule = exports.rule || (exports.rule = {}));
//# sourceMappingURL=GraphDefinition_Compartment.js.map