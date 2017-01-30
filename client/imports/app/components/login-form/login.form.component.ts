/**
 * Created by jakub on 30.01.17.
 */
import {Component, OnInit, OnDestroy,NgZone} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { Meteor } from 'meteor/meteor';
import template from './login.form.component.html';

@Component({
    selector: 'login-form-component',
    template
})
export class LoginFormComponent implements OnInit, OnDestroy {

    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private zone: NgZone) {
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
            Meteor.loginWithPassword(this.loginForm.value.email, this.loginForm.value.password, (err) => {
                this.zone.run(() => {
                    if (err) {
                        console.log("login error",err);
                    } else {
                        this.router.navigate(['/dashboard']);
                    }
                });
                this.loginForm.reset();
            });
        }
    }
}