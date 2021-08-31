import { FormControlBase } from './form-control-base.model';
export class DatePickerFormControl extends FormControlBase<Date> {
  constructor(config?: {
    type?: string,
    value?: Date,
    label: string,
    key: string,
    required?: boolean
  }) {
    config.type = 'datePicker';
    super(config);
  }
}
