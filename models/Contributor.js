"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
/**
 * A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
 */
class Contributor {
}
exports.default = Contributor;
/**
 * The type of contributor.
 */
var type;
(function (type) {
    type[type["author"] = 0] = "author";
    type[type["editor"] = 1] = "editor";
    type[type["reviewer"] = 2] = "reviewer";
    type[type["endorser"] = 3] = "endorser";
})(type = exports.type || (exports.type = {}));
//# sourceMappingURL=Contributor.js.map