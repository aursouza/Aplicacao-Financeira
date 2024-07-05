import { PrismaClient } from '@prisma/client'
import Financeiro from 'domain/financeiro/Financeiro'
import { FinanceiroGateway } from 'infra/repository/gateway/FinanceiroGateway'

export default class FinanceiroRepoPrisma implements FinanceiroGateway {
  private constructor(private readonly prismaClient: PrismaClient) {}

  public static create(prismaFin: PrismaClient) {
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
    console.log(retorno)
    return Financeiro.with({
      id: retorno.id,
      tipo: retorno.tipo,
      valor: retorno.Valor,
      status: retorno.status,
      data: new Date(retorno.data).toISOString(),
      descricao: retorno.descricao,
    })
  }
  async delete(id: string): Promise<void> {
    await this.prismaClient.financeiro.delete({ where: { id } })
  }
  async save(financeiro: Financeiro): Promise<void> {
    const dados = {
      id: financeiro.id!,
      tipo: financeiro.tipo.value,
      Valor: financeiro.valor.value,
      status: financeiro.status.value,
      data: financeiro.data.value.toISOString(),
      descricao: financeiro.descricao.value,
    }
    await this.prismaClient.financeiro.create({ data: dados })
  }
}
