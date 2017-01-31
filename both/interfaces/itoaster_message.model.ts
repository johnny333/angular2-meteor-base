import {EAlertType} from "../enums/alert_types.enum";
import {EToasterType} from "../enums/toaster_types.enum";
/**
 * Created by jakub on 30.01.17.
 */
export interface IToasterData{
    titleTranslateKey?: string;
    textTranslateKey: string;
    toasterType:EToasterType;
    alertType: EAlertType;
    showCancelButton?: boolean;
    confirmButtonTextTranslateKey?: string;
    cancelButtonTextTranslateKey?: string;
}