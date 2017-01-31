/**
 * Created by jakub on 31.01.17.
 */
import {Injectable, NgZone} from '@angular/core';
import {FormGroup} from "@angular/forms";
import { Meteor } from 'meteor/meteor';
import {Router} from "@angular/router";
import {ToastService} from "../toast/toast.service";
@Injectable()
export class AuthService {

    constructor(private router: Router,
                private zone: NgZone,
                private ToastService:ToastService) {
    }

    login = (form: FormGroup,errorCallback,successCallback)=> {
        Meteor.loginWithPassword(form.value.email, form.value.password, (err) => {
            this.zone.run(() => {
                errorCallback(err);
                if (!err){
                    successCallback();
                    this.router.navigate(['/dashboard']);
                }
            });
        });
    };

    logout = (callback)=> {
        Meteor.logout((error,result)=>{
            if(error){
                //error
            }
            callback(error,result);
            this.router.navigate(['/']);
        })
    };
}