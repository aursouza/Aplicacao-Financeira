import { PrismaClient } from '@prisma/client'
import { items } from '../../appFinFrontend/src/utils/mockData'

const prisma = new PrismaClient()

async function seed() {
  await prisma.financeiro.createMany({
    data: items,
  })
}

seed()
