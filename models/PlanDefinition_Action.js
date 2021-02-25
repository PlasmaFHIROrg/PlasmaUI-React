"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardinalityBehavior = exports.precheckBehavior = exports.requiredBehavior = exports.selectionBehavior = exports.groupingBehavior = void 0;
/**
 * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
 */
class PlanDefinition_Action {
}
exports.default = PlanDefinition_Action;
/**
 * Defines the grouping behavior for the action and its children.
 */
var groupingBehavior;
(function (groupingBehavior) {
})(groupingBehavior = exports.groupingBehavior || (exports.groupingBehavior = {}));
/**
 * Defines the selection behavior for the action and its children.
 */
var selectionBehavior;
(function (selectionBehavior) {
    selectionBehavior[selectionBehavior["any"] = 0] = "any";
    selectionBehavior[selectionBehavior["all"] = 1] = "all";
})(selectionBehavior = exports.selectionBehavior || (exports.selectionBehavior = {}));
/**
 * Defines the required behavior for the action.
 */
var requiredBehavior;
(function (requiredBehavior) {
    requiredBehavior[requiredBehavior["must"] = 0] = "must";
    requiredBehavior[requiredBehavior["could"] = 1] = "could";
})(requiredBehavior = exports.requiredBehavior || (exports.requiredBehavior = {}));
/**
 * Defines whether the action should usually be preselected.
 */
var precheckBehavior;
(function (precheckBehavior) {
    precheckBehavior[precheckBehavior["yes"] = 0] = "yes";
    precheckBehavior[precheckBehavior["no"] = 1] = "no";
})(precheckBehavior = exports.precheckBehavior || (exports.precheckBehavior = {}));
/**
 * Defines whether the action can be selected multiple times.
 */
var cardinalityBehavior;
(function (cardinalityBehavior) {
    cardinalityBehavior[cardinalityBehavior["single"] = 0] = "single";
    cardinalityBehavior[cardinalityBehavior["multiple"] = 1] = "multiple";
})(cardinalityBehavior = exports.cardinalityBehavior || (exports.cardinalityBehavior = {}));
//# sourceMappingURL=PlanDefinition_Action.js.map