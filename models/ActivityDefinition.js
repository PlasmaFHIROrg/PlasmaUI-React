"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
 */
class ActivityDefinition {
}
exports.default = ActivityDefinition;
/**
 * This is a ActivityDefinition resource
 */
ActivityDefinition.resourceType = "ActivityDefinition";
/**
 * The status of this activity definition. Enables tracking the life-cycle of the content.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=ActivityDefinition.js.map