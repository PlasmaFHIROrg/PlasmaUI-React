"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relationship = void 0;
/**
 * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
 */
class PlanDefinition_RelatedAction {
}
exports.default = PlanDefinition_RelatedAction;
/**
 * The relationship of this action to the related action.
 */
var relationship;
(function (relationship) {
    relationship[relationship["before"] = 0] = "before";
    relationship[relationship["concurrent"] = 1] = "concurrent";
    relationship[relationship["after"] = 2] = "after";
})(relationship = exports.relationship || (exports.relationship = {}));
//# sourceMappingURL=PlanDefinition_RelatedAction.js.map