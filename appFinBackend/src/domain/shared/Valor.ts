export default class Valor {
  private _value: number;

  constructor(value: string | number) {
    if (!this.validate(value)) {
      throw new Error("Valor inválido");
    }
    this._value = this.format(value);
  }

  private validate(value: string | number): boolean {
    const numValue = typeof value === "string" ? parseFloat(value) : value;
    return !isNaN(numValue) && numValue > 0;
  }

  private format(value: string | number): number {
    return typeof value === "string" ? parseFloat(value) : value;
  }

  get value(): number {
    return this._value;
  }
}
