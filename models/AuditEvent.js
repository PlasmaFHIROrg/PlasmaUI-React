"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outcome = exports.action = void 0;
/**
 * A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
 */
class AuditEvent {
}
exports.default = AuditEvent;
/**
 * This is a AuditEvent resource
 */
AuditEvent.resourceType = "AuditEvent";
/**
 * Indicator for type of action performed during the event that generated the audit.
 */
var action;
(function (action) {
    action[action["C"] = 0] = "C";
    action[action["R"] = 1] = "R";
    action[action["U"] = 2] = "U";
    action[action["D"] = 3] = "D";
    action[action["E"] = 4] = "E";
})(action = exports.action || (exports.action = {}));
/**
 * Indicates whether the event succeeded or failed.
 */
var outcome;
(function (outcome) {
})(outcome = exports.outcome || (exports.outcome = {}));
//# sourceMappingURL=AuditEvent.js.map