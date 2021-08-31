import { FormControlBase } from './form-control-base.model';

export interface FormControlsGenerator {
  generateForm(config?: {
    values?: any,
    options?: Map<any, {label: any, value: any}[]>
  }): FormControlBase<any>[];
}
