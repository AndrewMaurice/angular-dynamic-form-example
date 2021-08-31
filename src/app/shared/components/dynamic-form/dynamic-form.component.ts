import { DynamicFormBuildingService } from './../../../core/util/dynamic-form-building.service';
import { FormControlBase } from './../../models/form-control-base.model';
import { Component, Input, OnInit, Output, EventEmitter, DoCheck } from '@angular/core';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() formControls: FormControlBase<any>[];
  @Input() primaryBtnLabel: string;
  @Input() secondaryBtnLabel: string;
  @Input() disablePrimaryBtnIfInavlid: boolean;

  @Output() formSubmitted: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;

  filesDictionary: Map<string, File>;

  constructor(private formGroupBuildingService: DynamicFormBuildingService) { }

  ngOnInit(): void {
    this.filesDictionary = new Map<string, File>();
    this.form = new FormGroup({});

    // build the form group.
    this.form = this.formGroupBuildingService.buildFormGroup(this.formControls);
  }

  onSubmit(): void {

    if (this.filesDictionary.size > 0) {

      this.filesDictionary.forEach((value, key) => {

        this.form.controls[key].setValue(value);
      });

    }
    this.formSubmitted.emit(this.form.value);
  }

  onCancelOrBackClick(): void {
    this.form.reset();
    this.formSubmitted.emit(null);
  }

  isPrimaryBtnDisabled(): boolean {
    if (this.disablePrimaryBtnIfInavlid && this.form.invalid) {
      return true;
    }
    return false;
  }

  fileChangeEvent(files: FileList, controlName: string): void {

    const file = files.item(0);

    if (this.filesDictionary.has(controlName)) {
      const updateExistingFile = {name: controlName, value: file};
      this.filesDictionary.delete(controlName);
      this.filesDictionary.set(updateExistingFile.name, updateExistingFile.value);
    } else {
      this.filesDictionary.set(controlName, file);
    }

  }

  clearFileInput($event: any, controlName: string): void {
    this.form.controls[controlName].setValue('');
  }


}
