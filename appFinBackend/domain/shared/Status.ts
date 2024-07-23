export default class Status {
  private _value: string

  constructor(value: string) {
    this._value = value
  }

  get value(): string {
    return this._value
  }

  get isConsolidado(): boolean {
    return this._value === 'Consolidado'
  }
}
