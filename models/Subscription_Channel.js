"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
/**
 * The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.
 */
class Subscription_Channel {
}
exports.default = Subscription_Channel;
/**
 * The type of channel to send notifications on.
 */
var type;
(function (type) {
    type[type["websocket"] = 0] = "websocket";
    type[type["email"] = 1] = "email";
    type[type["sms"] = 2] = "sms";
    type[type["message"] = 3] = "message";
})(type = exports.type || (exports.type = {}));
//# sourceMappingURL=Subscription_Channel.js.map