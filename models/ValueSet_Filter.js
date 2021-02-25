"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.op = void 0;
/**
 * A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html).
 */
class ValueSet_Filter {
}
exports.default = ValueSet_Filter;
/**
 * The kind of operation to perform as a part of the filter criteria.
 */
var op;
(function (op) {
    op[op["regex"] = 0] = "regex";
    op[op["generalizes"] = 1] = "generalizes";
    op[op["exists"] = 2] = "exists";
})(op = exports.op || (exports.op = {}));
//# sourceMappingURL=ValueSet_Filter.js.map