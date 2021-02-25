"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.
 */
class DocumentReference {
}
exports.default = DocumentReference;
/**
 * This is a DocumentReference resource
 */
DocumentReference.resourceType = "DocumentReference";
/**
 * The status of this document reference.
 */
var status;
(function (status) {
    status[status["current"] = 0] = "current";
    status[status["superseded"] = 1] = "superseded";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=DocumentReference.js.map