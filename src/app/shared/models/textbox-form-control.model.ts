import { FormControlBase } from './form-control-base.model';

export class TextBoxFormContol<T> extends FormControlBase<T> {
  constructor(config?: {
    type: string,
    label: string,
    value?: T,
    key: string,
    required?: boolean,
    email?: boolean,
    pattern?: string,
    minLength?: number,
    maxLength?: number
  }) {
    super(config);
  }
}
