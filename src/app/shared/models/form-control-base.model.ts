export class FormControlBase<T> {
  type: string;
  label: string;
  value: T;
  key: string;
  min: number;
  max: number;
  required: boolean;
  options: any[];
  step: number;
  email: boolean;
  pattern: string;
  minLength: number;
  maxLength: number;
  rows: number;
  columns: number;
  accepts: string;

  constructor(config?: {
    type?: string,
    label?: string,
    value?: T,
    key?: string,
    min?: number,
    max?: number,
    required?: boolean,
    options?: any[],
    step?: number,
    email?: boolean,
    pattern?: string,
    minLength?: number,
    maxLength?: number,
    rows?: number,
    columns?: number,
    accepts?: string
  }) {
    this.type = config.type;
    this.label = config.label;
    this.value = config.value;
    this.key = config.key;
    this.min = config.min || 0;
    this.max = config.max;
    this.required = config.required;
    this.options = config.options;
    this.step = config.step;
    this.email = config.email;
    this.pattern = config.pattern;
    this.minLength = config.minLength;
    this.maxLength = config.maxLength;
    this.columns = config.columns;
    this.rows = config.rows;
    this.accepts = config.accepts;
  }
}
