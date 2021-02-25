"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 */
class ImagingStudy {
}
exports.default = ImagingStudy;
/**
 * This is a ImagingStudy resource
 */
ImagingStudy.resourceType = "ImagingStudy";
/**
 * The current state of the ImagingStudy.
 */
var status;
(function (status) {
    status[status["registered"] = 0] = "registered";
    status[status["available"] = 1] = "available";
    status[status["cancelled"] = 2] = "cancelled";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=ImagingStudy.js.map