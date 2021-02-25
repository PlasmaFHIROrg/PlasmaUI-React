"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = exports.status = void 0;
/**
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 */
class MeasureReport {
}
exports.default = MeasureReport;
/**
 * This is a MeasureReport resource
 */
MeasureReport.resourceType = "MeasureReport";
/**
 * The MeasureReport status. No data will be available until the MeasureReport status is complete.
 */
var status;
(function (status) {
    status[status["complete"] = 0] = "complete";
    status[status["pending"] = 1] = "pending";
    status[status["error"] = 2] = "error";
})(status = exports.status || (exports.status = {}));
/**
 * The type of measure report. This may be an individual report, which provides the score for the measure for an individual member of the population; a subject-listing, which returns the list of members that meet the various criteria in the measure; a summary report, which returns a population count for each of the criteria in the measure; or a data-collection, which enables the MeasureReport to be used to exchange the data-of-interest for a quality measure.
 */
var type;
(function (type) {
    type[type["individual"] = 0] = "individual";
    type[type["summary"] = 1] = "summary";
})(type = exports.type || (exports.type = {}));
//# sourceMappingURL=MeasureReport.js.map