"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.referencePolicy = exports.conditionalDelete = exports.conditionalRead = exports.versioning = void 0;
/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
class CapabilityStatement_Resource {
}
exports.default = CapabilityStatement_Resource;
/**
 * This field is set to no-version to specify that the system does not support (server) or use (client) versioning for this resource type. If this has some other value, the server must at least correctly track and populate the versionId meta-property on resources. If the value is 'versioned-update', then the server supports all the versioning features, including using e-tags for version integrity in the API.
 */
var versioning;
(function (versioning) {
    versioning[versioning["versioned"] = 0] = "versioned";
})(versioning = exports.versioning || (exports.versioning = {}));
/**
 * A code that indicates how the server supports conditional read.
 */
var conditionalRead;
(function (conditionalRead) {
})(conditionalRead = exports.conditionalRead || (exports.conditionalRead = {}));
/**
 * A code that indicates how the server supports conditional delete.
 */
var conditionalDelete;
(function (conditionalDelete) {
    conditionalDelete[conditionalDelete["single"] = 0] = "single";
    conditionalDelete[conditionalDelete["multiple"] = 1] = "multiple";
})(conditionalDelete = exports.conditionalDelete || (exports.conditionalDelete = {}));
/**
 * A set of flags that defines how references are supported.
 */
var referencePolicy;
(function (referencePolicy) {
    referencePolicy[referencePolicy["literal"] = 0] = "literal";
    referencePolicy[referencePolicy["logical"] = 1] = "logical";
    referencePolicy[referencePolicy["resolves"] = 2] = "resolves";
    referencePolicy[referencePolicy["enforced"] = 3] = "enforced";
    referencePolicy[referencePolicy["local"] = 4] = "local";
})(referencePolicy = exports.referencePolicy || (exports.referencePolicy = {}));
//# sourceMappingURL=CapabilityStatement_Resource.js.map