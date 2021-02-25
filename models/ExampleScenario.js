"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * Example of workflow instance.
 */
class ExampleScenario {
}
exports.default = ExampleScenario;
/**
 * This is a ExampleScenario resource
 */
ExampleScenario.resourceType = "ExampleScenario";
/**
 * The status of this example scenario. Enables tracking the life-cycle of the content.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=ExampleScenario.js.map