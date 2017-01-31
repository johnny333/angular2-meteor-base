/**
 * Created by jakub on 30.01.17.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import template from './login.form.component.html';
import {ToastService} from "../../services/toast/toast.service";
import {AuthService} from "../../services/auth/auth.service";
import {EAlertType} from "../../../../../both/enums/alert_types.enum";
import {IToasterData} from "../../../../../both/interfaces/itoaster_message.model";
import {ValidationService} from "../../services/validation/validation.service";

@Component({
    selector: 'login-form-component',
    template
})
export class LoginFormComponent implements OnInit, OnDestroy {

    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private ToastService:ToastService,
                private AuthService:AuthService) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnDestroy() {
    }

    login = () => {
        if (this.loginForm.valid) {
            this.AuthService.login(this.loginForm,(error)=>{
                if(error){
                    this.ToastService.emitToast(<IToasterData>{
                        alertType:EAlertType.ERROR,
                        titleTranslateKey:"LOGIN-PAGE.loginForm",
                        textTranslateKey:"LOGIN-PAGE.loginError",
                        showCancelButton:false,
                        confirmButtonTextTranslateKey:"CONFIG.dismiss"
                    });
                }
            },()=>{
               this.loginForm.reset();
            });
        }
        else{
        }
    }
}