"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * The EventDefinition resource provides a reusable description of when a particular event can occur.
 */
class EventDefinition {
}
exports.default = EventDefinition;
/**
 * This is a EventDefinition resource
 */
EventDefinition.resourceType = "EventDefinition";
/**
 * The status of this event definition. Enables tracking the life-cycle of the content.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=EventDefinition.js.map