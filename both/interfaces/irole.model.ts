import {BaseModel} from "./ibase.model";
import {Permission} from "../enums/permissions.enum";
/**
 * Created by jakub on 30.01.17.
 */
export interface Role   {
    permission?:Permission;
}