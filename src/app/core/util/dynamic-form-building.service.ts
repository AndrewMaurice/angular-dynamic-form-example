import { FormControlBase } from './../../shared/models/form-control-base.model';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormBuildingService {

  constructor() { }

  // build the fom group.
  buildFormGroup(formControls: FormControlBase<any>[]): FormGroup {
    const newForm: FormGroup = new FormGroup({});

    if (formControls && formControls.length > 0) {
      formControls.forEach(control => {
        newForm.addControl(control.key, new FormControl(control.value, this.addFormValidators(control)));
      });
    }

    return newForm;
  }

  // construct the validators array from the control based on the availability of validators of each form control.
  private addFormValidators(control: FormControlBase<any>): ValidatorFn[] {
    const validatorsArr: ValidatorFn[] = [];

    if (control.required) {
      validatorsArr.push(Validators.required);
    }
    if (control.email) {
      validatorsArr.push(Validators.email);
    }
    if (control.maxLength) {
      validatorsArr.push(Validators.maxLength(control.maxLength));
    }
    if (control.minLength) {
      validatorsArr.push(Validators.minLength(control.minLength));
    }

    return validatorsArr;
  }
}
