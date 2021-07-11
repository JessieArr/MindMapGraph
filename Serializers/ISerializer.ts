export interface ISerializer{
    serialize(obj:any) : string;
    deserialize(text:string) : any;
}