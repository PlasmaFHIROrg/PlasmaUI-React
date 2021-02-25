"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.method = void 0;
/**
 * A container for a collection of resources.
 */
class Bundle_Request {
}
exports.default = Bundle_Request;
/**
 * In a transaction or batch, this is the HTTP action to be executed for this entry. In a history bundle, this indicates the HTTP action that occurred.
 */
var method;
(function (method) {
    method[method["GET"] = 0] = "GET";
    method[method["HEAD"] = 1] = "HEAD";
    method[method["POST"] = 2] = "POST";
    method[method["PUT"] = 3] = "PUT";
    method[method["DELETE"] = 4] = "DELETE";
    method[method["PATCH"] = 5] = "PATCH";
})(method = exports.method || (exports.method = {}));
//# sourceMappingURL=Bundle_Request.js.map