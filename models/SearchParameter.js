"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifier = exports.comparator = exports.xpathUsage = exports.type = exports.status = void 0;
/**
 * A search parameter that defines a named search item that can be used to search/filter on a resource.
 */
class SearchParameter {
}
exports.default = SearchParameter;
/**
 * This is a SearchParameter resource
 */
SearchParameter.resourceType = "SearchParameter";
/**
 * The status of this search parameter. Enables tracking the life-cycle of the content.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
/**
 * The type of value that a search parameter may contain, and how the content is interpreted.
 */
var type;
(function (type) {
    type[type["number"] = 0] = "number";
    type[type["date"] = 1] = "date";
    type[type["string"] = 2] = "string";
    type[type["token"] = 3] = "token";
    type[type["reference"] = 4] = "reference";
    type[type["composite"] = 5] = "composite";
    type[type["quantity"] = 6] = "quantity";
    type[type["uri"] = 7] = "uri";
    type[type["special"] = 8] = "special";
})(type = exports.type || (exports.type = {}));
/**
 * How the search parameter relates to the set of elements returned by evaluating the xpath query.
 */
var xpathUsage;
(function (xpathUsage) {
    xpathUsage[xpathUsage["normal"] = 0] = "normal";
    xpathUsage[xpathUsage["phonetic"] = 1] = "phonetic";
    xpathUsage[xpathUsage["nearby"] = 2] = "nearby";
    xpathUsage[xpathUsage["distance"] = 3] = "distance";
    xpathUsage[xpathUsage["other"] = 4] = "other";
})(xpathUsage = exports.xpathUsage || (exports.xpathUsage = {}));
/**
 * Comparators supported for the search parameter.
 */
var comparator;
(function (comparator) {
    comparator[comparator["eq"] = 0] = "eq";
    comparator[comparator["ne"] = 1] = "ne";
    comparator[comparator["gt"] = 2] = "gt";
    comparator[comparator["lt"] = 3] = "lt";
    comparator[comparator["ge"] = 4] = "ge";
    comparator[comparator["le"] = 5] = "le";
    comparator[comparator["sa"] = 6] = "sa";
    comparator[comparator["eb"] = 7] = "eb";
    comparator[comparator["ap"] = 8] = "ap";
})(comparator = exports.comparator || (exports.comparator = {}));
/**
 * A modifier supported for the search parameter.
 */
var modifier;
(function (modifier) {
    modifier[modifier["missing"] = 0] = "missing";
    modifier[modifier["exact"] = 1] = "exact";
    modifier[modifier["contains"] = 2] = "contains";
    modifier[modifier["not"] = 3] = "not";
    modifier[modifier["text"] = 4] = "text";
    modifier[modifier["below"] = 5] = "below";
    modifier[modifier["above"] = 6] = "above";
    modifier[modifier["type"] = 7] = "type";
    modifier[modifier["identifier"] = 8] = "identifier";
    modifier[modifier["ofType"] = 9] = "ofType";
})(modifier = exports.modifier || (exports.modifier = {}));
//# sourceMappingURL=SearchParameter.js.map