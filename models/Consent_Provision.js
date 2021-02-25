"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
/**
 * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
class Consent_Provision {
}
exports.default = Consent_Provision;
/**
 * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.
 */
var type;
(function (type) {
    type[type["deny"] = 0] = "deny";
    type[type["permit"] = 1] = "permit";
})(type = exports.type || (exports.type = {}));
//# sourceMappingURL=Consent_Provision.js.map