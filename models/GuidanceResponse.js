"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.
 */
class GuidanceResponse {
}
exports.default = GuidanceResponse;
/**
 * This is a GuidanceResponse resource
 */
GuidanceResponse.resourceType = "GuidanceResponse";
/**
 * The status of the response. If the evaluation is completed successfully, the status will indicate success. However, in order to complete the evaluation, the engine may require more information. In this case, the status will be data-required, and the response will contain a description of the additional required information. If the evaluation completed successfully, but the engine determines that a potentially more accurate response could be provided if more data was available, the status will be data-requested, and the response will contain a description of the additional requested information.
 */
var status;
(function (status) {
    status[status["success"] = 0] = "success";
    status[status["failure"] = 1] = "failure";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=GuidanceResponse.js.map