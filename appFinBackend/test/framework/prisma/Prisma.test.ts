import { PrismaClient } from '@prisma/client'

describe('Prisma', () => {
  it('Deve criar uma instância do PrismaClient', () => {
    const prisma = new PrismaClient()
    expect(prisma).toBeDefined()
  })
})
