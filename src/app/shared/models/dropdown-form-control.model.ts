import { FormControlBase } from './form-control-base.model';

export class DropDownFormControl<T> extends FormControlBase<T> {
  constructor(config?: {
    type?: string,
    value?: T,
    label: string,
    key: string,
    required?: boolean,
    options: {label: any, value: any}[]
  }) {
    config.type = 'dropDown';
    super(config);
  }
}
