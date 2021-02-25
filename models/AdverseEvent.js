"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actuality = void 0;
/**
 * Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.
 */
class AdverseEvent {
}
exports.default = AdverseEvent;
/**
 * This is a AdverseEvent resource
 */
AdverseEvent.resourceType = "AdverseEvent";
/**
 * Whether the event actually happened, or just had the potential to. Note that this is independent of whether anyone was affected or harmed or how severely.
 */
var actuality;
(function (actuality) {
    actuality[actuality["actual"] = 0] = "actual";
    actuality[actuality["potential"] = 1] = "potential";
})(actuality = exports.actuality || (exports.actuality = {}));
//# sourceMappingURL=AdverseEvent.js.map