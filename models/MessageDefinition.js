"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseRequired = exports.category = exports.status = void 0;
/**
 * Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.
 */
class MessageDefinition {
}
exports.default = MessageDefinition;
/**
 * This is a MessageDefinition resource
 */
MessageDefinition.resourceType = "MessageDefinition";
/**
 * The status of this message definition. Enables tracking the life-cycle of the content.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
/**
 * The impact of the content of the message.
 */
var category;
(function (category) {
    category[category["consequence"] = 0] = "consequence";
    category[category["currency"] = 1] = "currency";
    category[category["notification"] = 2] = "notification";
})(category = exports.category || (exports.category = {}));
/**
 * Declare at a message definition level whether a response is required or only upon error or success, or never.
 */
var responseRequired;
(function (responseRequired) {
    responseRequired[responseRequired["always"] = 0] = "always";
    responseRequired[responseRequired["never"] = 1] = "never";
})(responseRequired = exports.responseRequired || (exports.responseRequired = {}));
//# sourceMappingURL=MessageDefinition.js.map