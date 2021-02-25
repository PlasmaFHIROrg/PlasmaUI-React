"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intent = exports.status = void 0;
/**
 * A task to be performed.
 */
class Task {
}
exports.default = Task;
/**
 * This is a Task resource
 */
Task.resourceType = "Task";
/**
 * The current status of the task.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["requested"] = 1] = "requested";
    status[status["received"] = 2] = "received";
    status[status["accepted"] = 3] = "accepted";
    status[status["rejected"] = 4] = "rejected";
    status[status["ready"] = 5] = "ready";
    status[status["cancelled"] = 6] = "cancelled";
    status[status["failed"] = 7] = "failed";
    status[status["completed"] = 8] = "completed";
})(status = exports.status || (exports.status = {}));
/**
 * Indicates the "level" of actionability associated with the Task, i.e. i+R[9]Cs this a proposed task, a planned task, an actionable task, etc.
 */
var intent;
(function (intent) {
    intent[intent["unknown"] = 0] = "unknown";
    intent[intent["proposal"] = 1] = "proposal";
    intent[intent["plan"] = 2] = "plan";
    intent[intent["order"] = 3] = "order";
    intent[intent["option"] = 4] = "option";
})(intent = exports.intent || (exports.intent = {}));
//# sourceMappingURL=Task.js.map