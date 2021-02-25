"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.code = void 0;
/**
 * A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.
 */
class DocumentReference_RelatesTo {
}
exports.default = DocumentReference_RelatesTo;
/**
 * The type of relationship that this document has with anther document.
 */
var code;
(function (code) {
    code[code["replaces"] = 0] = "replaces";
    code[code["transforms"] = 1] = "transforms";
    code[code["signs"] = 2] = "signs";
    code[code["appends"] = 3] = "appends";
})(code = exports.code || (exports.code = {}));
//# sourceMappingURL=DocumentReference_RelatesTo.js.map