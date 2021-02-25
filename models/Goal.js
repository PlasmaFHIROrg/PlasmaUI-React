"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lifecycleStatus = void 0;
/**
 * Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 */
class Goal {
}
exports.default = Goal;
/**
 * This is a Goal resource
 */
Goal.resourceType = "Goal";
/**
 * The state of the goal throughout its lifecycle.
 */
var lifecycleStatus;
(function (lifecycleStatus) {
    lifecycleStatus[lifecycleStatus["proposed"] = 0] = "proposed";
    lifecycleStatus[lifecycleStatus["planned"] = 1] = "planned";
    lifecycleStatus[lifecycleStatus["accepted"] = 2] = "accepted";
    lifecycleStatus[lifecycleStatus["active"] = 3] = "active";
    lifecycleStatus[lifecycleStatus["completed"] = 4] = "completed";
    lifecycleStatus[lifecycleStatus["cancelled"] = 5] = "cancelled";
    lifecycleStatus[lifecycleStatus["rejected"] = 6] = "rejected";
})(lifecycleStatus = exports.lifecycleStatus || (exports.lifecycleStatus = {}));
//# sourceMappingURL=Goal.js.map