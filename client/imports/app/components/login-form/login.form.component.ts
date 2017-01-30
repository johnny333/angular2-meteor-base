/**
 * Created by jakub on 30.01.17.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import template from './login.form.component.html';
import {ILoginData} from "../../../../../both/interfaces/ILoginData";

@Component({
    selector:'login-form-component',
    template
})
export class LoginFormComponent implements OnInit, OnDestroy {

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    login = (userLoginData:ILoginData) =>{

    }
}