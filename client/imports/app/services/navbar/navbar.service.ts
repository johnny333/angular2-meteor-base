/**
 * Created by jakub on 30.01.17.
 */
import {Injectable, EventEmitter, Output} from '@angular/core';
import {EAlertType} from "../../../../../both/enums/alert_types.enum";
import {IToasterData} from "../../../../../both/interfaces/itoaster_message.model";
import {INavbarLink} from "../../../../../both/interfaces/inavbar_link.model";
@Injectable()
export class NavBarService {

    getTopNavbarLinks = (pageComponentName: string): Array<INavbarLink>=> {
        switch (pageComponentName) {
            case "LoginPageComponent" :
                return [
                    <INavbarLink>{i18n: "INFO-PAGE.title", href: "/"},
                ];
            case "DashboardPageComponent" :
                return [
                    <INavbarLink>{i18n: "CONFIG.logout", href: "/logout"}
                ];
        }
    }
}