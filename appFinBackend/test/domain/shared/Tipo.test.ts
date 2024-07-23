import Tipo from "../../../domain/shared/Tipo";

describe("Tipo", () => {
  it("Deve criar uma instância válida de Tipo com valor 'receita'", () => {
    const tipo = new Tipo("receita");
    expect(tipo.value).toBe("receita");
  });

  it("Deve criar uma instância válida de Tipo com valor 'despesa'", () => {
    const tipo = new Tipo("despesa");
    expect(tipo.value).toBe("despesa");
  });

  it("Deve lançar um erro ao tentar criar uma instância de Tipo com valor inválido", () => {
    expect(() => new Tipo("invalido")).toThrowError("Tipo inválido");
  });
});
