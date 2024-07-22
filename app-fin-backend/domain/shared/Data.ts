import { isDate } from 'util/types'

export default class Data {
  private _value: Date

  constructor(value: string | Date) {
    if (isDate(value)) {
      this._value = value
    } else {
      if (!this.validate(value)) {
        throw new Error('Data inválida')
      }
      this._value = this.format(value)
    }
  }

  private validate(value: string): boolean {
    if (value.toString().length > 10) {
      const dateValue = typeof value === 'string' ? new Date(value) : value
      return !isNaN(dateValue.getTime())
    } else {
      const dateValue =
        typeof value === 'string' ? new Date(value + 'T03:00:00Z') : value
      return !isNaN(dateValue.getTime())
    }
  }

  private format(value: string | Date): Date {
    return typeof value === 'string' ? new Date(value + 'T03:00:00Z') : value
  }

  get value(): Date {
    return this._value
  }

  get valueAsString(): string {
    return this._value.toISOString()
  }

  getFormattedDate(): string {
    return this._value.toLocaleDateString('pt-BR', { timeZone: 'UTC' })
  }
}
