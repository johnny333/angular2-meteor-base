/**
 * Created by jakub on 24.01.17.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import template from './login.page.html';
import style from "./login.page.component.scss";
import {IPageComponent} from "../../../../../both/interfaces/IPageComponent";

@Component({
    template,
    styles:[style]

})
export class LoginPageComponent implements OnInit, OnDestroy,IPageComponent {
    ngOnInit() {
    }

    ngOnDestroy() {
    }

    getPageComponentName = (): string=> {
        return "LoginPageComponent";
    }
}