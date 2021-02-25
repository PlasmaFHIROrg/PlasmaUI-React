"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.participantEffectiveGroupMeasure = exports.studyEffectiveGroupMeasure = void 0;
/**
 * The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 */
class ResearchElementDefinition_Characteristic {
}
exports.default = ResearchElementDefinition_Characteristic;
/**
 * Indicates how elements are aggregated within the study effective period.
 */
var studyEffectiveGroupMeasure;
(function (studyEffectiveGroupMeasure) {
    studyEffectiveGroupMeasure[studyEffectiveGroupMeasure["mean"] = 0] = "mean";
    studyEffectiveGroupMeasure[studyEffectiveGroupMeasure["median"] = 1] = "median";
})(studyEffectiveGroupMeasure = exports.studyEffectiveGroupMeasure || (exports.studyEffectiveGroupMeasure = {}));
/**
 * Indicates how elements are aggregated within the study effective period.
 */
var participantEffectiveGroupMeasure;
(function (participantEffectiveGroupMeasure) {
    participantEffectiveGroupMeasure[participantEffectiveGroupMeasure["mean"] = 0] = "mean";
    participantEffectiveGroupMeasure[participantEffectiveGroupMeasure["median"] = 1] = "median";
})(participantEffectiveGroupMeasure = exports.participantEffectiveGroupMeasure || (exports.participantEffectiveGroupMeasure = {}));
//# sourceMappingURL=ResearchElementDefinition_Characteristic.js.map