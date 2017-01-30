import {Component} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import template from './app.component.html';
import style from './app.component.scss';
@Component({
    selector: 'app',
    template,
    styles:[style]
})
export class AppComponent {

    constructor(private translate: TranslateService) {
        translate.addLangs(["pl","en"]);
        translate.setDefaultLang('pl');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|pl/) ? browserLang : 'pl');
    }
}
