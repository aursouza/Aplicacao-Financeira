import { PrismaClient } from '@prisma/client'
import Financeiro from 'domain/financeiro/Financeiro'
import { FinanceiroGateway } from 'repository/gateway/FinanceiroGateway'
import Data from 'domain/shared/Data'
import Descricao from 'domain/shared/Descricao'
import Status from 'domain/shared/Status'
import Tipo from 'domain/shared/Tipo'
import Valor from 'domain/shared/Valor'

export class FinanceiroRepoPrisma implements FinanceiroGateway {
  private constructor(private readonly prismaClient: PrismaClient) {}

  public create(prismaFin: PrismaClient) {
    return new FinanceiroRepoPrisma(prismaFin)
  }
  list(): Promise<Financeiro[]> {
    throw new Error('Method not implemented.')
  }
  async update(financeiro: Financeiro): Promise<Financeiro> {
    const dados = {
      id: financeiro.id,
      tipo: financeiro.tipo.value,
      Valor: financeiro.valor.value,
      status: financeiro.status.value,
      data: financeiro.data.value.toISOString(),
      descricao: financeiro.descricao.value,
    }
    const retorno = await this.prismaClient.financeiro.update({
      where: { id: financeiro.id },
      data: dados,
    })
    return Financeiro.with({
      id: retorno.id,
      tipo: new Tipo(retorno.tipo),
      valor: new Valor(retorno.Valor),
      status: new Status(retorno.status),
      data: new Data(retorno.data),
      descricao: new Descricao(retorno.descricao),
    })
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
  async save(financeiro: Financeiro): Promise<void> {
    const dados = {
      id: financeiro.id,
      tipo: financeiro.tipo.value,
      Valor: financeiro.valor.value,
      status: financeiro.status.value,
      data: financeiro.data.value.toISOString(),
      descricao: financeiro.descricao.value,
    }
    await this.prismaClient.financeiro.create({ data: dados })
  }
}
