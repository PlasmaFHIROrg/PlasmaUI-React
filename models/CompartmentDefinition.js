"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.code = exports.status = void 0;
/**
 * A compartment definition that defines how resources are accessed on a server.
 */
class CompartmentDefinition {
}
exports.default = CompartmentDefinition;
/**
 * This is a CompartmentDefinition resource
 */
CompartmentDefinition.resourceType = "CompartmentDefinition";
/**
 * The status of this compartment definition. Enables tracking the life-cycle of the content.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
/**
 * Which compartment this definition describes.
 */
var code;
(function (code) {
    code[code["Patient"] = 0] = "Patient";
    code[code["Encounter"] = 1] = "Encounter";
    code[code["RelatedPerson"] = 2] = "RelatedPerson";
    code[code["Practitioner"] = 3] = "Practitioner";
    code[code["Device"] = 4] = "Device";
})(code = exports.code || (exports.code = {}));
//# sourceMappingURL=CompartmentDefinition.js.map