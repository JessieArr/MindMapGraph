import { ICollectionManager } from "./ICollectionManager";
import * as fs from 'fs';

export class FilesystemManager implements ICollectionManager{
    public getCollection() : string[]
    {
        let filesInDirectory = fs.readdirSync(process.cwd());
        return filesInDirectory;
    }

    public getNode(nodeIdentifier:string) : string
    {
        let fileContents = fs.readFileSync(nodeIdentifier);
        return fileContents;
    }
}