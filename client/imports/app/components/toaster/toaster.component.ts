/**
 * Created by jakub on 30.01.17.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {ToastService} from "../../services/toast/toast.service";
import {IToasterData} from "../../../../../both/interfaces/itoaster_message.model";
import template from "./toaster.component.html";
import {EAlertType} from "../../../../../both/enums/alert_types.enum";
import {SweetAlertService} from 'ng2-sweetalert2';
import {ISwalOption} from "../../../../../both/interfaces/iswal_options.model";

@Component({
    selector: 'toaster-component',
    template
})
export class ToasterComponent implements OnInit, OnDestroy {
    constructor(private translate: TranslateService, private ToastService: ToastService, private SweetAlertService: SweetAlertService) {
        this.ToastService.messageEmitter.subscribe(messageData => {
            this.pushToaster(messageData);
        });
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    pushToaster = (messageData: IToasterData)=> {
        console.log(messageData);
        let swalOption = <ISwalOption>{
            text: this.getTranslationKey(messageData,"textTranslateKey"),
            type: EAlertType[messageData.alertType].toLowerCase(),
            title: this.getTranslationKey(messageData,"titleTranslateKey"),
            confirmButtonText: this.getTranslationKey(messageData,"confirmButtonTextTranslateKey"),
            cancelButtonText: this.getTranslationKey(messageData,"cancelButtonTextTranslateKey"),
            showCancelButton: messageData.showCancelButton
        };
        console.log(swalOption);
        this.getSwalAlert(swalOption);
    };

    getTranslationKey=(object:Object,property:string)=>{
        if(object.hasOwnProperty(property) && object[property]){
            console.log("getTranslationKey",object[property],this.translate.instant(object[property]));
            return this.translate.instant(object[property]);
        }else {
            return null;
        }
    };

    getSwalAlert = (options: ISwalOption)=> {
        this.SweetAlertService.swal(options);
    };
}