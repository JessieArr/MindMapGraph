import { FilesystemManager } from "./CollectionManagers/FilesystemManager";
import { JsonSerializer } from "./Serializers/JsonSerializer";

let fileSystem = new FilesystemManager();

let argv = process.argv;
if(argv.length > 2)
{
    let command = argv[2];
    switch(command)
    {
        case "list":
            console.log(fileSystem.getCollection());
            break;
        case "node":
            let filename = argv[3];
            let serializer = new JsonSerializer();
            let fileContents = fileSystem.getNode(filename);
            let obj = serializer.deserialize(fileContents);
            console.log(obj);
    }
}
