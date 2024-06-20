import Financeiro from "../../../domain/financeiro/Financeiro";

describe("Financeiro", () => {
  it("Deve criar uma instância válida de Financeiro", () => {
    const financeiro = new Financeiro({
      tipo: "receita",
      valor: 100,
      status: true,
      data: "2024-01-01",
      descricao: "Salário",
    });

    expect(financeiro.id).toBeDefined();
    expect(financeiro.tipo.value).toBe("receita");
    expect(financeiro.valor.value).toBe(100);
    expect(financeiro.status.value).toBe(true);
    expect(financeiro.status.isConsolidado).toBe(true);
    expect(financeiro.data.value).toEqual(new Date("2024-01-01T00:00:00Z"));
    expect(financeiro.descricao.value).toBe("Salário");
  });

  it("Deve permitir criar uma instância de Financeiro com uma ID especificada", () => {
    const id = "1234";
    const financeiro = new Financeiro({
      id,
      tipo: "despesa",
      valor: 200,
      status: false,
      data: "2024-02-01",
      descricao: "Compra de materiais",
    });

    expect(financeiro.id).toBe(id);
    expect(financeiro.tipo.value).toBe("despesa");
    expect(financeiro.valor.value).toBe(200);
    expect(financeiro.status.value).toBe(false);
    expect(financeiro.status.isConsolidado).toBe(false);
    expect(financeiro.data.value).toEqual(new Date("2024-02-01T00:00:00Z"));
    expect(financeiro.descricao.value).toBe("Compra de materiais");
  });

  it("Deve lançar um erro ao tentar criar uma instância de Financeiro com tipo inválido", () => {
    expect(
      () =>
        new Financeiro({
          tipo: "invalido",
          valor: 100,
          status: true,
          data: "2024-01-01",
          descricao: "Descrição inválida",
        })
    ).toThrowError("Tipo inválido");
  });
});
