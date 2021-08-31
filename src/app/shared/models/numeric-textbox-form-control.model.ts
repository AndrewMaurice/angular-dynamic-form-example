import { FormControlBase } from './form-control-base.model';
export class NumericTextBoxFormControl extends FormControlBase<number> {
  constructor(config?: {
    type?: string,
    label: string,
    value?: number,
    key: string,
    min: number,
    max: number,
    required?: boolean,
    step: number
  }) {
    config.type = 'numericTextBox';
    super(config);
  }
}
