"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
class Consent {
}
exports.default = Consent;
/**
 * This is a Consent resource
 */
Consent.resourceType = "Consent";
/**
 * Indicates the current state of this consent.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["proposed"] = 1] = "proposed";
    status[status["active"] = 2] = "active";
    status[status["rejected"] = 3] = "rejected";
    status[status["inactive"] = 4] = "inactive";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=Consent.js.map