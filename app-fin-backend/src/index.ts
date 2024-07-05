import FinanceiroRepoPrisma from 'infra/repository/financeiro/Financeiro.repo.prisma'
import ExpressAdapter from 'infra/http/ExpressAdapter'
import { prisma } from 'framework/prisma/prisma'

import { CreateFinanceiroUsecase } from 'usecases/createfinanceiro/create.financeiro'
import { CreateFinanceiroRoute } from 'infra/api/routes/financeiro/create.financeiro.express.route'
import { UpdateFinanceiroUsecase } from 'usecases/editarfinanceiro/update.financeiro'
import { UpdateFinanceiroRoute } from 'infra/api/routes/financeiro/update.financeiro.express.route'

function main() {
  const aRepository = FinanceiroRepoPrisma.create(prisma)
  const createFinanceiroUsecase = CreateFinanceiroUsecase.create(aRepository)
  const updateFinanceiroUsecase = UpdateFinanceiroUsecase.create(aRepository)
  const createRoute = CreateFinanceiroRoute.create(createFinanceiroUsecase)
  const updateRoute = UpdateFinanceiroRoute.create(updateFinanceiroUsecase)
  const port = 8000
  const api = ExpressAdapter.create([createRoute, updateRoute])
  api.start(port)
}

main()
