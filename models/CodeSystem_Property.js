"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
/**
 * The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.
 */
class CodeSystem_Property {
}
exports.default = CodeSystem_Property;
/**
 * The type of the property value. Properties of type "code" contain a code defined by the code system (e.g. a reference to another defined concept).
 */
var type;
(function (type) {
    type[type["code"] = 0] = "code";
    type[type["Coding"] = 1] = "Coding";
    type[type["string"] = 2] = "string";
    type[type["integer"] = 3] = "integer";
    type[type["boolean"] = 4] = "boolean";
    type[type["dateTime"] = 5] = "dateTime";
    type[type["decimal"] = 6] = "decimal";
})(type = exports.type || (exports.type = {}));
//# sourceMappingURL=CodeSystem_Property.js.map