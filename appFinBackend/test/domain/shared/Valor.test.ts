import Valor from '../../../src/domain/shared/Valor'

describe('Valor', () => {
  it('Deve criar uma instância válida de Valor', () => {
    const valor = new Valor(100)
    expect(valor.value).toBe(100)
  })

  it('Deve lançar um erro para valor inválido (negativo)', () => {
    expect(() => new Valor(-100)).toThrow('Valor inválido')
  })

  it('Deve lançar um erro para valor inválido (não numérico)', () => {
    expect(() => new Valor('abc')).toThrow('Valor inválido')
  })

  it('Deve criar uma instância válida de Valor a partir de uma string numérica', () => {
    const valor = new Valor('100.50')
    expect(valor.value).toBe(100.5)
  })
})
