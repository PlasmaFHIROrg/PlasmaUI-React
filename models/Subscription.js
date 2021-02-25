"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.
 */
class Subscription {
}
exports.default = Subscription;
/**
 * This is a Subscription resource
 */
Subscription.resourceType = "Subscription";
/**
 * The status of the subscription, which marks the server state for managing the subscription.
 */
var status;
(function (status) {
    status[status["requested"] = 0] = "requested";
    status[status["active"] = 1] = "active";
    status[status["error"] = 2] = "error";
    status[status["off"] = 3] = "off";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=Subscription.js.map