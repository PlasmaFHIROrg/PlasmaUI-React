"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchType = exports.use = void 0;
/**
 * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
 */
class OperationDefinition_Parameter {
}
exports.default = OperationDefinition_Parameter;
/**
 * Whether this is an input or an output parameter.
 */
var use;
(function (use) {
    use[use["out"] = 0] = "out";
})(use = exports.use || (exports.use = {}));
/**
 * How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.
 */
var searchType;
(function (searchType) {
    searchType[searchType["number"] = 0] = "number";
    searchType[searchType["date"] = 1] = "date";
    searchType[searchType["string"] = 2] = "string";
    searchType[searchType["token"] = 3] = "token";
    searchType[searchType["reference"] = 4] = "reference";
    searchType[searchType["composite"] = 5] = "composite";
    searchType[searchType["quantity"] = 6] = "quantity";
    searchType[searchType["uri"] = 7] = "uri";
    searchType[searchType["special"] = 8] = "special";
})(searchType = exports.searchType || (exports.searchType = {}));
//# sourceMappingURL=OperationDefinition_Parameter.js.map