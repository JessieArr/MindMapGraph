"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonSerializer = void 0;
var JsonSerializer = /** @class */ (function () {
    function JsonSerializer() {
    }
    JsonSerializer.prototype.serialize = function (object) {
        return JSON.stringify(object);
    };
    JsonSerializer.prototype.deserialize = function (text) {
        return JSON.parse(text);
    };
    return JsonSerializer;
}());
exports.JsonSerializer = JsonSerializer;
//# sourceMappingURL=JsonSerializer.js.map