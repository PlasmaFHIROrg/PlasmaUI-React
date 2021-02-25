"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
 */
class QuestionnaireResponse {
}
exports.default = QuestionnaireResponse;
/**
 * This is a QuestionnaireResponse resource
 */
QuestionnaireResponse.resourceType = "QuestionnaireResponse";
/**
 * The position of the questionnaire response within its overall lifecycle.
 */
var status;
(function (status) {
    status[status["completed"] = 0] = "completed";
    status[status["amended"] = 1] = "amended";
    status[status["stopped"] = 2] = "stopped";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=QuestionnaireResponse.js.map