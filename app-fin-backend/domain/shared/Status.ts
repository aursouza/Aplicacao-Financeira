export default class Status {
  private _value: boolean;

  constructor(value: boolean) {
    this._value = value;
  }

  get value(): boolean {
    return this._value;
  }

  get isConsolidado(): boolean {
    return this._value === true;
  }
}
