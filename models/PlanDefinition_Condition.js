"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kind = void 0;
/**
 * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
 */
class PlanDefinition_Condition {
}
exports.default = PlanDefinition_Condition;
/**
 * The kind of condition.
 */
var kind;
(function (kind) {
    kind[kind["applicability"] = 0] = "applicability";
    kind[kind["start"] = 1] = "start";
    kind[kind["stop"] = 2] = "stop";
})(kind = exports.kind || (exports.kind = {}));
//# sourceMappingURL=PlanDefinition_Condition.js.map