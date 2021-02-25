"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = exports.productCategory = void 0;
/**
 * A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity.
 */
class BiologicallyDerivedProduct {
}
exports.default = BiologicallyDerivedProduct;
/**
 * This is a BiologicallyDerivedProduct resource
 */
BiologicallyDerivedProduct.resourceType = "BiologicallyDerivedProduct";
/**
 * Broad category of this product.
 */
var productCategory;
(function (productCategory) {
    productCategory[productCategory["organ"] = 0] = "organ";
    productCategory[productCategory["tissue"] = 1] = "tissue";
    productCategory[productCategory["fluid"] = 2] = "fluid";
    productCategory[productCategory["cells"] = 3] = "cells";
    productCategory[productCategory["biologicalAgent"] = 4] = "biologicalAgent";
})(productCategory = exports.productCategory || (exports.productCategory = {}));
/**
 * Whether the product is currently available.
 */
var status;
(function (status) {
    status[status["available"] = 0] = "available";
    status[status["unavailable"] = 1] = "unavailable";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=BiologicallyDerivedProduct.js.map