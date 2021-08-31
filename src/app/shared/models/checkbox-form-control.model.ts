import { FormControlBase } from 'src/app/shared/models/form-control-base.model';

export class CheckBoxFormControl extends FormControlBase<boolean> {
  constructor(config?: {
    key: string,
    label: string,
    value?: boolean,
    type?: string,
    required?: boolean
  }) {
    config.type = 'checkBox';
    super(config);
  }
}
