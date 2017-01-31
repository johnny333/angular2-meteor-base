/**
 * Created by jakub on 29.01.17.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import template from './dashboard.page.html';
import style from './dashboard.page.component.scss';
import {ToastService} from "../../services/toast/toast.service";
import {IPageComponent} from "../../../../../both/interfaces/IPageComponent";
@Component({
    template,
    styles: [style]
})

export class DashboardPageComponent implements OnInit, OnDestroy,IPageComponent {

    constructor(private ToastService: ToastService) {

    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    getPageComponentName = (): string=> {
        return "DashboardPageComponent";
    }

}