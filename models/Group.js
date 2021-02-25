"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
/**
 * Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.
 */
class Group {
}
exports.default = Group;
/**
 * This is a Group resource
 */
Group.resourceType = "Group";
/**
 * Identifies the broad classification of the kind of resources the group includes.
 */
var type;
(function (type) {
    type[type["person"] = 0] = "person";
    type[type["animal"] = 1] = "animal";
    type[type["practitioner"] = 2] = "practitioner";
    type[type["device"] = 3] = "device";
    type[type["medication"] = 4] = "medication";
    type[type["substance"] = 5] = "substance";
})(type = exports.type || (exports.type = {}));
//# sourceMappingURL=Group.js.map