"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * A collection of documents compiled for a purpose together with metadata that applies to the collection.
 */
class DocumentManifest {
}
exports.default = DocumentManifest;
/**
 * This is a DocumentManifest resource
 */
DocumentManifest.resourceType = "DocumentManifest";
/**
 * The status of this document manifest.
 */
var status;
(function (status) {
    status[status["current"] = 0] = "current";
    status[status["superseded"] = 1] = "superseded";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=DocumentManifest.js.map