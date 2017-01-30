import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, Http} from "@angular/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from 'ng2-translate';
import { AppComponent } from './app.component';
import { routes, ROUTES_PROVIDERS } from './app.routes';
import {PAGES_DECLARATIONS} from "./pages/index";
import {COMPONENT_DECLARATIONS} from "./components/index";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AccountsModule,
    HttpModule,
    TranslateModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    ...PAGES_DECLARATIONS,
    ...COMPONENT_DECLARATIONS
  ],
  providers: [
    ... ROUTES_PROVIDERS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}