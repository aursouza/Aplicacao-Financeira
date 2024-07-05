import FinanceiroRepoPrisma from 'infra/repository/financeiro/Financeiro.repo.prisma'
import ExpressAdapter from 'infra/http/ExpressAdapter'
import { prisma } from 'framework/prisma/prisma'

import { CreateFinanceiroUsecase } from 'usecases/createfinanceiro/create.financeiro'
import { CreateFinanceiroRoute } from 'infra/api/routes/financeiro/create.financeiro.express.route'

function main() {
  const aRepository = FinanceiroRepoPrisma.create(prisma)
  const createFinanceiroUsecase = CreateFinanceiroUsecase.create(aRepository)
  const createRoute = CreateFinanceiroRoute.create(createFinanceiroUsecase)
  const port = 8000
  const api = ExpressAdapter.create([createRoute])
  api.start(port)
}

main()
