"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
class ElementDefinition_Discriminator {
}
exports.default = ElementDefinition_Discriminator;
/**
 * How the element value is interpreted when discrimination is evaluated.
 */
var type;
(function (type) {
    type[type["value"] = 0] = "value";
    type[type["exists"] = 1] = "exists";
    type[type["pattern"] = 2] = "pattern";
    type[type["type"] = 3] = "type";
    type[type["profile"] = 4] = "profile";
})(type = exports.type || (exports.type = {}));
//# sourceMappingURL=ElementDefinition_Discriminator.js.map