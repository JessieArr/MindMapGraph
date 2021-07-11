import { ISerializer } from "./ISerializer"

export class JsonSerializer implements ISerializer
{
    public serialize(object:any) : string
    {
        return JSON.stringify(object);
    }

    public deserialize(text:string) : any
    {
        return JSON.parse(text);
    }
}