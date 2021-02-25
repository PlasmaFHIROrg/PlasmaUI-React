"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeSearch = exports.status = void 0;
/**
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
class TerminologyCapabilities {
}
exports.default = TerminologyCapabilities;
/**
 * This is a TerminologyCapabilities resource
 */
TerminologyCapabilities.resourceType = "TerminologyCapabilities";
/**
 * The status of this terminology capabilities. Enables tracking the life-cycle of the content.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
/**
 * The degree to which the server supports the code search parameter on ValueSet, if it is supported.
 */
var codeSearch;
(function (codeSearch) {
    codeSearch[codeSearch["explicit"] = 0] = "explicit";
    codeSearch[codeSearch["all"] = 1] = "all";
})(codeSearch = exports.codeSearch || (exports.codeSearch = {}));
//# sourceMappingURL=TerminologyCapabilities.js.map