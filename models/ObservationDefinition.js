"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permittedDataType = void 0;
/**
 * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
 */
class ObservationDefinition {
}
exports.default = ObservationDefinition;
/**
 * This is a ObservationDefinition resource
 */
ObservationDefinition.resourceType = "ObservationDefinition";
/**
 * The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
 */
var permittedDataType;
(function (permittedDataType) {
    permittedDataType[permittedDataType["Quantity"] = 0] = "Quantity";
    permittedDataType[permittedDataType["CodeableConcept"] = 1] = "CodeableConcept";
    permittedDataType[permittedDataType["string"] = 2] = "string";
    permittedDataType[permittedDataType["boolean"] = 3] = "boolean";
    permittedDataType[permittedDataType["integer"] = 4] = "integer";
    permittedDataType[permittedDataType["Range"] = 5] = "Range";
    permittedDataType[permittedDataType["Ratio"] = 6] = "Ratio";
    permittedDataType[permittedDataType["SampledData"] = 7] = "SampledData";
    permittedDataType[permittedDataType["time"] = 8] = "time";
    permittedDataType[permittedDataType["dateTime"] = 9] = "dateTime";
    permittedDataType[permittedDataType["Period"] = 10] = "Period";
})(permittedDataType = exports.permittedDataType || (exports.permittedDataType = {}));
//# sourceMappingURL=ObservationDefinition.js.map