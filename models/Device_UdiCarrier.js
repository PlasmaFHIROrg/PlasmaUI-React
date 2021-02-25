"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entryType = void 0;
/**
 * A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 */
class Device_UdiCarrier {
}
exports.default = Device_UdiCarrier;
/**
 * A coded entry to indicate how the data was entered.
 */
var entryType;
(function (entryType) {
    entryType[entryType["barcode"] = 0] = "barcode";
    entryType[entryType["rfid"] = 1] = "rfid";
    entryType[entryType["manual"] = 2] = "manual";
    entryType[entryType["card"] = 3] = "card";
    entryType[entryType["unknown"] = 4] = "unknown";
})(entryType = exports.entryType || (exports.entryType = {}));
//# sourceMappingURL=Device_UdiCarrier.js.map