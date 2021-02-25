"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
/**
 * A human's name with the ability to identify parts and usage.
 */
class HumanName {
}
exports.default = HumanName;
/**
 * Identifies the purpose for this name.
 */
var use;
(function (use) {
    use[use["usual"] = 0] = "usual";
    use[use["official"] = 1] = "official";
    use[use["temp"] = 2] = "temp";
    use[use["nickname"] = 3] = "nickname";
    use[use["anonymous"] = 4] = "anonymous";
    use[use["old"] = 5] = "old";
    use[use["maiden"] = 6] = "maiden";
})(use = exports.use || (exports.use = {}));
//# sourceMappingURL=HumanName.js.map