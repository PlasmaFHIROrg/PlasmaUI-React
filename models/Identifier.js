"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
class Identifier {
}
exports.default = Identifier;
/**
 * The purpose of this identifier.
 */
var use;
(function (use) {
    use[use["usual"] = 0] = "usual";
    use[use["official"] = 1] = "official";
    use[use["temp"] = 2] = "temp";
    use[use["secondary"] = 3] = "secondary";
    use[use["old"] = 4] = "old";
})(use = exports.use || (exports.use = {}));
//# sourceMappingURL=Identifier.js.map