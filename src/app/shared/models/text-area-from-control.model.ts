import { FormControlBase } from 'src/app/shared/models/form-control-base.model';
export class TextAreaFormControl extends FormControlBase<string> {
  constructor(config?: {
    key: string,
    label: string,
    value?: string,
    type?: string,
    rows?: number,
    columns?: number,
    required?: boolean,
    minLength?: number,
    maxLength?: number
  }) {
    config.type = 'textArea';
    super(config);
  }
}
