/**
 * Created by jakub on 30.01.17.
 */
import { Injectable,EventEmitter,Output } from '@angular/core';
import {EAlertType} from "../../../../../both/enums/alert_types.enum";
import {IToasterData} from "../../../../../both/interfaces/itoaster_message.model";
import {ISwalOption} from "../../../../../both/interfaces/iswal_options.model";
@Injectable()
export class ToastService {
    @Output() messageEmitter=new EventEmitter<IToasterData>(true);

    public emitToast = (option:IToasterData) =>{
        this.messageEmitter.emit(option);
    }
}