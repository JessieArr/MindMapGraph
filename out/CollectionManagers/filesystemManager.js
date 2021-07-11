"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesystemManager = void 0;
var fs = require("fs");
var FilesystemManager = /** @class */ (function () {
    function FilesystemManager() {
    }
    FilesystemManager.prototype.getCollection = function () {
        var filesInDirectory = fs.readdirSync(process.cwd());
        return filesInDirectory;
    };
    FilesystemManager.prototype.getNode = function (nodeIdentifier) {
        var fileContents = fs.readFileSync(nodeIdentifier);
        return fileContents;
    };
    return FilesystemManager;
}());
exports.FilesystemManager = FilesystemManager;
//# sourceMappingURL=FilesystemManager.js.map