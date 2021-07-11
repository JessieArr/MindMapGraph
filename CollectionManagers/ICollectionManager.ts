export interface ICollectionManager{
    getCollection() : string[],
    getNode(nodeIdentifier:string) : string
}