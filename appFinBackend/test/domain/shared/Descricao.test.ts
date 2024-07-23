import Descricao from '../../../src/domain/shared/Descricao'

describe('Descricao', () => {
  it('Deve criar uma instância válida de Descricao', () => {
    const descricao = new Descricao('Compra de materiais')
    expect(descricao.value).toBe('Compra de materiais')
  })

  it('Deve lançar um erro para descrição inválida (string vazia)', () => {
    expect(() => new Descricao('')).toThrow('Descrição inválida')
  })
})
