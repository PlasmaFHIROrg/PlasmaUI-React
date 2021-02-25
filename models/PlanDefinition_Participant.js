"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
/**
 * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
 */
class PlanDefinition_Participant {
}
exports.default = PlanDefinition_Participant;
/**
 * The type of participant in the action.
 */
var type;
(function (type) {
    type[type["patient"] = 0] = "patient";
    type[type["practitioner"] = 1] = "practitioner";
    type[type["device"] = 2] = "device";
})(type = exports.type || (exports.type = {}));
//# sourceMappingURL=PlanDefinition_Participant.js.map