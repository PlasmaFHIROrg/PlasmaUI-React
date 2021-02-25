"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
 */
class PlanDefinition {
}
exports.default = PlanDefinition;
/**
 * This is a PlanDefinition resource
 */
PlanDefinition.resourceType = "PlanDefinition";
/**
 * The status of this plan definition. Enables tracking the life-cycle of the content.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=PlanDefinition.js.map