"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mode = void 0;
/**
 * A container for a collection of resources.
 */
class Bundle_Search {
}
exports.default = Bundle_Search;
/**
 * Why this entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
 */
var mode;
(function (mode) {
    mode[mode["match"] = 0] = "match";
    mode[mode["include"] = 1] = "include";
    mode[mode["outcome"] = 2] = "outcome";
})(mode = exports.mode || (exports.mode = {}));
//# sourceMappingURL=Bundle_Search.js.map