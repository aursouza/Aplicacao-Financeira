import Iniciar from '@/index'

test('Deve receber a informação que foi inicializado', () => {
  const teste1 = new Iniciar()
  expect(teste1.inicializacao()).toBe('Inicializado')
})
