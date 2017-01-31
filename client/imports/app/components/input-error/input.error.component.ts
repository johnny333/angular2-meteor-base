/**
 * Created by jakub on 16.02.17.
 */
import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ValidationService} from "../../services/validation/validation.service";
import template from './input.error.component.html';

@Component({
    selector: 'input-error',
    template
})
export class InputErrorComponent {
    @Input() control: FormControl;
    constructor() { }

    errorMessage() {
        for (let propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }

        return null;
    }
}
