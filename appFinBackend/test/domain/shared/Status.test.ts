import Status from '../../../src/domain/shared/Status'

describe('Status', () => {
  it('Deve criar uma instância válida de Status com valor true', () => {
    const status = new Status('Consolidado')
    expect(status.value).toBe('Consolidado')
    expect(status.isConsolidado).toBe(true)
  })

  it('Deve criar uma instância válida de Status com valor false', () => {
    const status = new Status('Pendente')
    expect(status.value).toBe('Pendente')
    expect(status.isConsolidado).toBe(false)
  })
})
