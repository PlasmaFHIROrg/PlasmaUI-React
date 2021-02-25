"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.
 */
class ResearchStudy {
}
exports.default = ResearchStudy;
/**
 * This is a ResearchStudy resource
 */
ResearchStudy.resourceType = "ResearchStudy";
/**
 * The current state of the study.
 */
var status;
(function (status) {
    status[status["active"] = 0] = "active";
    status[status["approved"] = 1] = "approved";
    status[status["completed"] = 2] = "completed";
    status[status["disapproved"] = 3] = "disapproved";
    status[status["withdrawn"] = 4] = "withdrawn";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=ResearchStudy.js.map