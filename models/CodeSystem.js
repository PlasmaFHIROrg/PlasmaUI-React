"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.content = exports.hierarchyMeaning = exports.status = void 0;
/**
 * The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.
 */
class CodeSystem {
}
exports.default = CodeSystem;
/**
 * This is a CodeSystem resource
 */
CodeSystem.resourceType = "CodeSystem";
/**
 * The date (and optionally time) when the code system resource was created or revised.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
/**
 * The meaning of the hierarchy of concepts as represented in this resource.
 */
var hierarchyMeaning;
(function (hierarchyMeaning) {
})(hierarchyMeaning = exports.hierarchyMeaning || (exports.hierarchyMeaning = {}));
/**
 * The extent of the content of the code system (the concepts and codes it defines) are represented in this resource instance.
 */
var content;
(function (content) {
    content[content["example"] = 0] = "example";
    content[content["fragment"] = 1] = "fragment";
    content[content["complete"] = 2] = "complete";
    content[content["supplement"] = 3] = "supplement";
})(content = exports.content || (exports.content = {}));
//# sourceMappingURL=CodeSystem.js.map