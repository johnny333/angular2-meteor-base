/**
 * Created by jakub on 31.01.17.
 */
import {Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import template from './logout.page.html';
import style from './logout.page.component.scss';
import {IPageComponent} from "../../../../../both/interfaces/IPageComponent";
import {AuthService} from "../../services/auth/auth.service";
@Component({
    template,
    styles: [style]
})

export class LogoutPageComponent implements OnInit, OnDestroy,IPageComponent,AfterViewInit {
    constructor(private AuthService:AuthService) {

    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        this.AuthService.logout((error,result)=>{
            //custom implementation
        });
    }

    ngOnDestroy() {
    }

    getPageComponentName = (): string=> {
        return "LogoutPageComponent";
    }

}