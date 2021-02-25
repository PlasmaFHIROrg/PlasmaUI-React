"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mode = exports.status = void 0;
/**
 * Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
 */
class Location {
}
exports.default = Location;
/**
 * This is a Location resource
 */
Location.resourceType = "Location";
/**
 * The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location.
 */
var status;
(function (status) {
    status[status["active"] = 0] = "active";
    status[status["suspended"] = 1] = "suspended";
    status[status["inactive"] = 2] = "inactive";
})(status = exports.status || (exports.status = {}));
/**
 * Indicates whether a resource instance represents a specific location or a class of locations.
 */
var mode;
(function (mode) {
    mode[mode["instance"] = 0] = "instance";
    mode[mode["kind"] = 1] = "kind";
})(mode = exports.mode || (exports.mode = {}));
//# sourceMappingURL=Location.js.map