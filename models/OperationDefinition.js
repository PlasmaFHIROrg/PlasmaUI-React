"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kind = exports.status = void 0;
/**
 * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
 */
class OperationDefinition {
}
exports.default = OperationDefinition;
/**
 * This is a OperationDefinition resource
 */
OperationDefinition.resourceType = "OperationDefinition";
/**
 * The status of this operation definition. Enables tracking the life-cycle of the content.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
/**
 * Whether this is an operation or a named query.
 */
var kind;
(function (kind) {
    kind[kind["operation"] = 0] = "operation";
    kind[kind["query"] = 1] = "query";
})(kind = exports.kind || (exports.kind = {}));
//# sourceMappingURL=OperationDefinition.js.map