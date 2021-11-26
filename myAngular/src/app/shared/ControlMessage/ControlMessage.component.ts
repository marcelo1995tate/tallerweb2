import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from '../../Services/Validation.service';

@Component({
    selector: 'control-messages',
    template: `
        <div *ngIf="errorMessage !== null">{{errorMessage}}</div>
    `
})
export class ControlMessagesComponent {
    @Input() control: FormControl;
    @Input() field: string

    constructor() {}

    get errorMessage(){
        for (let validationName in this.control.errors) {
            if (
              this.control.errors.hasOwnProperty(validationName) &&
              this.control.touched
            )
            {
              return ValidationService.getValidatorErrorMessage(
                validationName,
                this.field,
                this.control.errors[validationName]
              );
            }
        }
      
          return null;
    }

}