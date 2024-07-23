export default class Tipo {
  private _value: string
  private static validTypes = ['receita', 'despesa']

  constructor(value: string) {
    if (!this.validate(value)) {
      throw new Error('Tipo inválido')
    }
    this._value = value
  }

  private validate(value: string): boolean {
    return Tipo.validTypes.includes(value)
  }

  get value(): string {
    return this._value
  }
}
