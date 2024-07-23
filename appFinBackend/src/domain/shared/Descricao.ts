export default class Descricao {
  private _value: string;

  constructor(value: string) {
    if (!this.validate(value)) {
      throw new Error("Descrição inválida");
    }
    this._value = value;
  }

  private validate(value: string): boolean {
    return value.length > 0;
  }

  get value(): string {
    return this._value;
  }
}
