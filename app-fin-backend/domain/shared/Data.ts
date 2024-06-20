export default class Data {
  private _value: Date;

  constructor(value: string | Date) {
    if (!this.validate(value)) {
      throw new Error("Data inválida");
    }
    this._value = this.format(value);
  }

  private validate(value: string | Date): boolean {
    const dateValue =
      typeof value === "string" ? new Date(value + "T00:00:00Z") : value;
    return !isNaN(dateValue.getTime());
  }

  private format(value: string | Date): Date {
    return typeof value === "string" ? new Date(value + "T00:00:00Z") : value;
  }

  get value(): Date {
    return this._value;
  }

  getFormattedDate(): string {
    return this._value.toLocaleDateString("pt-BR", { timeZone: "UTC" });
  }
}
