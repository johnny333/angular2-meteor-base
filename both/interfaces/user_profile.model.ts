import {Role} from "./irole.model";
import {BaseModel} from "./ibase.model";
/**
 * Created by jakub on 30.01.17.
 */
export interface UserProfile {
    roles?:Array<Role>;
    phone?:string;
}