"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meaning = void 0;
/**
 * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
class Consent_Data {
}
exports.default = Consent_Data;
/**
 * How the resource reference is interpreted when testing consent restrictions.
 */
var meaning;
(function (meaning) {
    meaning[meaning["instance"] = 0] = "instance";
    meaning[meaning["related"] = 1] = "related";
    meaning[meaning["dependents"] = 2] = "dependents";
    meaning[meaning["authoredby"] = 3] = "authoredby";
})(meaning = exports.meaning || (exports.meaning = {}));
//# sourceMappingURL=Consent_Data.js.map