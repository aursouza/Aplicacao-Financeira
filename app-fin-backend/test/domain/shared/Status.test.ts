import Status from "../../../domain/shared/Status";

describe("Status", () => {
  it("Deve criar uma instância válida de Status com valor true", () => {
    const status = new Status(true);
    expect(status.value).toBe(true);
    expect(status.isConsolidado).toBe(true);
  });

  it("Deve criar uma instância válida de Status com valor false", () => {
    const status = new Status(false);
    expect(status.value).toBe(false);
    expect(status.isConsolidado).toBe(false);
  });
});
