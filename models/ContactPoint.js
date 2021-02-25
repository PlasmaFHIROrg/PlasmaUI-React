"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = exports.system = void 0;
/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 */
class ContactPoint {
}
exports.default = ContactPoint;
/**
 * Telecommunications form for contact point - what communications system is required to make use of the contact.
 */
var system;
(function (system) {
    system[system["phone"] = 0] = "phone";
    system[system["fax"] = 1] = "fax";
    system[system["email"] = 2] = "email";
    system[system["pager"] = 3] = "pager";
    system[system["url"] = 4] = "url";
    system[system["sms"] = 5] = "sms";
    system[system["other"] = 6] = "other";
})(system = exports.system || (exports.system = {}));
/**
 * Identifies the purpose for the contact point.
 */
var use;
(function (use) {
    use[use["home"] = 0] = "home";
    use[use["work"] = 1] = "work";
    use[use["temp"] = 2] = "temp";
    use[use["old"] = 3] = "old";
    use[use["mobile"] = 4] = "mobile";
})(use = exports.use || (exports.use = {}));
//# sourceMappingURL=ContactPoint.js.map