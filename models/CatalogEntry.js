"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
/**
 * Catalog entries are wrappers that contextualize items included in a catalog.
 */
class CatalogEntry {
}
exports.default = CatalogEntry;
/**
 * This is a CatalogEntry resource
 */
CatalogEntry.resourceType = "CatalogEntry";
/**
 * Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribable.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
//# sourceMappingURL=CatalogEntry.js.map