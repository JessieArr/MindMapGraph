"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FilesystemManager_1 = require("./CollectionManagers/FilesystemManager");
var JsonSerializer_1 = require("./Serializers/JsonSerializer");
var fileSystem = new FilesystemManager_1.FilesystemManager();
var argv = process.argv;
if (argv.length > 2) {
    var command = argv[2];
    switch (command) {
        case "list":
            console.log(fileSystem.getCollection());
            break;
        case "node":
            var filename = argv[3];
            var serializer = new JsonSerializer_1.JsonSerializer();
            var fileContents = fileSystem.getNode(filename);
            var obj = serializer.deserialize(fileContents);
            console.log(obj);
    }
}
//# sourceMappingURL=index.js.map