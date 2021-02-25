"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * A physical entity which is the primary unit of operational and/or administrative interest in a study.
 */
class ResearchSubject {
}
exports.default = ResearchSubject;
/**
 * This is a ResearchSubject resource
 */
ResearchSubject.resourceType = "ResearchSubject";
/**
 * The current state of the subject.
 */
var status;
(function (status) {
    status[status["candidate"] = 0] = "candidate";
    status[status["eligible"] = 1] = "eligible";
    status[status["ineligible"] = 2] = "ineligible";
    status[status["screening"] = 3] = "screening";
    status[status["withdrawn"] = 4] = "withdrawn";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=ResearchSubject.js.map