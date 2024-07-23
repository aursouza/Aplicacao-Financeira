import Data from '../../../src/domain/shared/Data'

describe('Data', () => {
  it('Deve criar uma instância válida de Data a partir de um objeto Date', () => {
    const data = new Data(new Date('2024-01-01T00:00:00Z'))
    expect(data.value).toEqual(new Date('2024-01-01T00:00:00Z'))
  })

  it('Deve criar uma instância válida de Data a partir de uma string', () => {
    const data = new Data('2024-01-01')
    expect(data.value).toEqual(new Date('2024-01-01T00:00:00Z'))
  })

  it('Deve lançar um erro para data inválida', () => {
    expect(() => new Data('data inválida')).toThrow('Data inválida')
  })

  it('Deve retornar a data no formato pt-BR', () => {
    const data = new Data('2024-01-01')
    expect(data.getFormattedDate()).toBe('01/01/2024')
  })
})
