/**
 * Created by jakub on 30.01.17.
 */
export interface BaseModel extends ModificationModel {
    _id?: string;
}
export interface ModificationModel {
    creationDate?:number;
    modifiedById?:string;
    modifiedDate?:number;
    deleted?:boolean;
    deletedById?:string;
    deletedDate?:number;
    description?:string;
}