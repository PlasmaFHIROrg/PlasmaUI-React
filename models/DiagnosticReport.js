"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
 */
class DiagnosticReport {
}
exports.default = DiagnosticReport;
/**
 * This is a DiagnosticReport resource
 */
DiagnosticReport.resourceType = "DiagnosticReport";
/**
 * The status of the diagnostic report.
 */
var status;
(function (status) {
    status[status["registered"] = 0] = "registered";
    status[status["partial"] = 1] = "partial";
    status[status["preliminary"] = 2] = "preliminary";
    status[status["final"] = 3] = "final";
    status[status["amended"] = 4] = "amended";
    status[status["corrected"] = 5] = "corrected";
    status[status["appended"] = 6] = "appended";
    status[status["cancelled"] = 7] = "cancelled";
    status[status["unknown"] = 8] = "unknown";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=DiagnosticReport.js.map