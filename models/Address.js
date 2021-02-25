"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = exports.use = void 0;
/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.
 */
class Address {
}
exports.default = Address;
/**
 * The purpose of this address.
 */
var use;
(function (use) {
    use[use["home"] = 0] = "home";
    use[use["work"] = 1] = "work";
    use[use["temp"] = 2] = "temp";
    use[use["old"] = 3] = "old";
    use[use["billing"] = 4] = "billing";
})(use = exports.use || (exports.use = {}));
/**
 * Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.
 */
var type;
(function (type) {
    type[type["postal"] = 0] = "postal";
    type[type["physical"] = 1] = "physical";
    type[type["both"] = 2] = "both";
})(type = exports.type || (exports.type = {}));
//# sourceMappingURL=Address.js.map