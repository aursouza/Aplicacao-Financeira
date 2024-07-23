import FinanceiroRepoPrisma from '@/infra/repository/financeiro/Financeiro.repo.prisma'
import ExpressAdapter from '@/infra/http/ExpressAdapter'
import { prisma } from '@/framework/prisma/prisma'

import { CreateFinanceiroUsecase } from '@/usecases/createfinanceiro/create.financeiro'
import { CreateFinanceiroRoute } from '@/infra/api/routes/financeiro/create.financeiro.express.route'
import { UpdateFinanceiroUsecase } from '@/usecases/editarfinanceiro/update.financeiro'
import { UpdateFinanceiroRoute } from '@/infra/api/routes/financeiro/update.financeiro.express.route'
import { DeleteFinanceiroUsecase } from '@/usecases/excluirfinanceiro/delete.financeiro'
import { DeleteFinanceiroRoute } from '@/infra/api/routes/financeiro/delete.financeiro.express.route'
import { ListarFinanceiroUsecase } from '@/usecases/Listarfinanceiro/listarfinanceiro'
import { ListarFinanceiroRoute } from '@/infra/api/routes/financeiro/listar.financeiro.express.route'
import { PrincipalRoute } from '@/infra/api/routes/rotaprincipal'

function main() {
  const aRepository = FinanceiroRepoPrisma.create(prisma)
  const createFinanceiroUsecase = CreateFinanceiroUsecase.create(aRepository)
  const updateFinanceiroUsecase = UpdateFinanceiroUsecase.create(aRepository)
  const deleteFinanceiroUsecase = DeleteFinanceiroUsecase.create(aRepository)
  const listarFinanceiroUsecase = ListarFinanceiroUsecase.create(aRepository)
  const createRoute = CreateFinanceiroRoute.create(createFinanceiroUsecase)
  const updateRoute = UpdateFinanceiroRoute.create(updateFinanceiroUsecase)
  const deleteRoute = DeleteFinanceiroRoute.create(deleteFinanceiroUsecase)
  const listarRoute = ListarFinanceiroRoute.create(listarFinanceiroUsecase)
  const principalRoute = PrincipalRoute.create(listarFinanceiroUsecase)
  const port = 8000
  const api = ExpressAdapter.create([
    createRoute,
    updateRoute,
    deleteRoute,
    listarRoute,
    principalRoute,
  ])
  api.start(port)
}

main()
