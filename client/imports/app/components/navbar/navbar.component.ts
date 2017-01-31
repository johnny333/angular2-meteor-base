/**
 * Created by jakub on 30.01.17.
 */
import {Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges} from '@angular/core';
import template from './navbar.component.html';
import {NavBarService} from "../../services/navbar/navbar.service";
import {INavbarLink} from "../../../../../both/interfaces/inavbar_link.model";
import {TranslateService} from "ng2-translate";

@Component({
    selector: 'navbar-component',
    template
})
export class NavBarComponent implements OnInit, OnDestroy,OnChanges {

    @Input("pageComponentName") pageComponentName: string;

    public links: Array<INavbarLink>;

    constructor(private NavBarService: NavBarService, private translation: TranslateService) {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        let chng = changes["pageComponentName"];
        if (chng) {
            if ((chng.currentValue) && chng.currentValue != chng.previousValue) {
                this.links = this.NavBarService.getTopNavbarLinks(chng.currentValue);
                console.log(this.links, chng.currentValue);
            }
        }
    }

    public getTranslation = (translationKey: string)=> {
        return this.translation.instant(translationKey);
    };
}