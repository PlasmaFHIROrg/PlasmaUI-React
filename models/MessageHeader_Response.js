"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.code = void 0;
/**
 * The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
 */
class MessageHeader_Response {
}
exports.default = MessageHeader_Response;
/**
 * Code that identifies the type of response to the message - whether it was successful or not, and whether it should be resent or not.
 */
var code;
(function (code) {
    code[code["ok"] = 0] = "ok";
})(code = exports.code || (exports.code = {}));
//# sourceMappingURL=MessageHeader_Response.js.map