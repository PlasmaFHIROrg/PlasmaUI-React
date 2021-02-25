"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.
 */
class Endpoint {
}
exports.default = Endpoint;
/**
 * This is a Endpoint resource
 */
Endpoint.resourceType = "Endpoint";
/**
 * active | suspended | error | off | test.
 */
var status;
(function (status) {
    status[status["active"] = 0] = "active";
    status[status["suspended"] = 1] = "suspended";
    status[status["error"] = 2] = "error";
    status[status["off"] = 3] = "off";
    status[status["test"] = 4] = "test";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=Endpoint.js.map