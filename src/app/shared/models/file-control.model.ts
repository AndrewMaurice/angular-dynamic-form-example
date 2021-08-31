import { FormControlBase } from './form-control-base.model';

export class FileFormControl<T> extends FormControlBase<T> {
  constructor(config?: {
    type: string,
    label: string,
    value?: T,
    key: string,
    required?: boolean,
    accepts: string
  }) {
    super(config);
  }
}
