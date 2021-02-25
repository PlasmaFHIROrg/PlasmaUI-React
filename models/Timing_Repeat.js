"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.when = exports.periodUnit = exports.durationUnit = void 0;
/**
 * Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.
 */
class Timing_Repeat {
}
exports.default = Timing_Repeat;
/**
 * The units of time for the duration, in UCUM units.
 */
var durationUnit;
(function (durationUnit) {
    durationUnit[durationUnit["s"] = 0] = "s";
    durationUnit[durationUnit["min"] = 1] = "min";
    durationUnit[durationUnit["h"] = 2] = "h";
    durationUnit[durationUnit["d"] = 3] = "d";
    durationUnit[durationUnit["wk"] = 4] = "wk";
    durationUnit[durationUnit["mo"] = 5] = "mo";
    durationUnit[durationUnit["a"] = 6] = "a";
})(durationUnit = exports.durationUnit || (exports.durationUnit = {}));
/**
 * The units of time for the period in UCUM units.
 */
var periodUnit;
(function (periodUnit) {
    periodUnit[periodUnit["s"] = 0] = "s";
    periodUnit[periodUnit["min"] = 1] = "min";
    periodUnit[periodUnit["h"] = 2] = "h";
    periodUnit[periodUnit["d"] = 3] = "d";
    periodUnit[periodUnit["wk"] = 4] = "wk";
    periodUnit[periodUnit["mo"] = 5] = "mo";
    periodUnit[periodUnit["a"] = 6] = "a";
})(periodUnit = exports.periodUnit || (exports.periodUnit = {}));
/**
 * An approximate time period during the day, potentially linked to an event of daily living that indicates when the action should occur.
 */
var when;
(function (when) {
    when[when["MORN"] = 0] = "MORN";
    when[when["NOON"] = 1] = "NOON";
    when[when["AFT"] = 2] = "AFT";
    when[when["EVE"] = 3] = "EVE";
    when[when["NIGHT"] = 4] = "NIGHT";
    when[when["PHS"] = 5] = "PHS";
    when[when["HS"] = 6] = "HS";
    when[when["WAKE"] = 7] = "WAKE";
    when[when["C"] = 8] = "C";
    when[when["CM"] = 9] = "CM";
    when[when["CD"] = 10] = "CD";
    when[when["CV"] = 11] = "CV";
    when[when["AC"] = 12] = "AC";
    when[when["ACM"] = 13] = "ACM";
    when[when["ACD"] = 14] = "ACD";
    when[when["ACV"] = 15] = "ACV";
    when[when["PC"] = 16] = "PC";
    when[when["PCM"] = 17] = "PCM";
    when[when["PCD"] = 18] = "PCD";
    when[when["PCV"] = 19] = "PCV";
})(when = exports.when || (exports.when = {}));
//# sourceMappingURL=Timing_Repeat.js.map