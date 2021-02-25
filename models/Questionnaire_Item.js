"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableBehavior = exports.type = void 0;
/**
 * A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 */
class Questionnaire_Item {
}
exports.default = Questionnaire_Item;
/**
 * The type of questionnaire item this is - whether text for display, a grouping of other items or a particular type of data to be captured (string, integer, coded choice, etc.).
 */
var type;
(function (type) {
    type[type["group"] = 0] = "group";
    type[type["display"] = 1] = "display";
    type[type["boolean"] = 2] = "boolean";
    type[type["decimal"] = 3] = "decimal";
    type[type["integer"] = 4] = "integer";
    type[type["date"] = 5] = "date";
    type[type["dateTime"] = 6] = "dateTime";
    type[type["time"] = 7] = "time";
    type[type["string"] = 8] = "string";
    type[type["text"] = 9] = "text";
    type[type["url"] = 10] = "url";
    type[type["choice"] = 11] = "choice";
    type[type["attachment"] = 12] = "attachment";
    type[type["reference"] = 13] = "reference";
    type[type["quantity"] = 14] = "quantity";
})(type = exports.type || (exports.type = {}));
/**
 * Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
 */
var enableBehavior;
(function (enableBehavior) {
    enableBehavior[enableBehavior["all"] = 0] = "all";
    enableBehavior[enableBehavior["any"] = 1] = "any";
})(enableBehavior = exports.enableBehavior || (exports.enableBehavior = {}));
//# sourceMappingURL=Questionnaire_Item.js.map