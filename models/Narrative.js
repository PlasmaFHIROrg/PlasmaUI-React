"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * A human-readable summary of the resource conveying the essential clinical and business information for the resource.
 */
class Narrative {
}
exports.default = Narrative;
/**
 * The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
 */
var status;
(function (status) {
    status[status["generated"] = 0] = "generated";
    status[status["extensions"] = 1] = "extensions";
    status[status["additional"] = 2] = "additional";
    status[status["empty"] = 3] = "empty";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=Narrative.js.map