import { PrismaClient } from '@prisma/client'
import Financeiro from 'domain/financeiro/Financeiro'
import { FinanceiroGateway } from 'repository/gateway/FinanceiroGateway'

export class FinanceiroRepoPrisma implements FinanceiroGateway {
  private constructor(private readonly prismaClient: PrismaClient) {}

  public create(prismaFin: PrismaClient) {
    return new FinanceiroRepoPrisma(prismaFin)
  }
  list(): Promise<Financeiro[]> {
    throw new Error('Method not implemented.')
  }
  update(financeiro: Financeiro): Promise<Financeiro> {
    throw new Error('Method not implemented.')
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
