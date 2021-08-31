import { TextBoxFormContol } from './../../shared/models/textbox-form-control.model';
import { NumericTextBoxFormControl } from './../../shared/models/numeric-textbox-form-control.model';
import { CheckBoxFormControl } from './../../shared/models/checkbox-form-control.model';
import { TextAreaFormControl } from './../../shared/models/text-area-from-control.model';
import { DatePickerFormControl } from './../../shared/models/data-picker-form-control.model';
import { Injectable } from '@angular/core';
import { DropDownFormControl } from 'src/app/shared/models/dropdown-form-control.model';
import { FormControlBase } from 'src/app/shared/models/form-control-base.model';
import { FormControlsGenerator } from 'src/app/shared/models/form-controls-generator.model';
import { FileFormControl } from 'src/app/shared/models/file-control.model';

@Injectable({
  providedIn: 'root'
})
export class AddAndEditFormExampleGeneratorService implements FormControlsGenerator {
  generateForm(config?: { values?: any; options?: Map<any, { label: any; value: any; }[]>; }): FormControlBase<any>[] {
    const controls: FormControlBase<any>[] = [];

    // tslint:disable-next-line: max-line-length
    controls.push(new TextBoxFormContol({required: true, key: 'employeeName', label: 'Employee Name', value: config.values ? config.values.employeeName : '', type: 'text'}));
    // tslint:disable-next-line: max-line-length
    controls.push(new TextBoxFormContol({required: true, key: 'email', label: 'Email', value: config.values ? config.values.email : '', type: 'email'}));
    // tslint:disable-next-line: max-line-length
    controls.push(new DropDownFormControl({required: true, key: 'cityId', label: 'City', value: config.values ? config.values.cityId : '', options: config.options.get('cities') || []}));
    // tslint:disable-next-line: max-line-length
    controls.push(new DatePickerFormControl({key: 'birthDay', label: 'Birth Date', value: config.values ? config.values.birthDay : ''  }));
    // tslint:disable-next-line: max-line-length
    controls.push(new NumericTextBoxFormControl({key: 'age', label: 'Age', type: 'number', value: config.values ? config.values.age : 1, required: true, max: 900, min: 1, step: 1}));
    // tslint:disable-next-line: max-line-length
    controls.push(new FileFormControl({key: 'employeeCV', label: 'Upload your CV', value: null, type: 'file', required: true, accepts: 'application/pdf'}));
    // tslint:disable-next-line: max-line-length
    controls.push(new TextAreaFormControl({key: 'notes', label: 'Comments & Detailed Activites (Why the employee must travel)', rows: 10, value: config.values ? config.values.notes : '', required: true}));
    // tslint:disable-next-line: max-line-length
    controls.push(new CheckBoxFormControl({key: 'hasAccomodation', label: 'Has Accomodation', value: config.values ? config.values.hasAccomodation : false}));
    return controls;

  }

}
