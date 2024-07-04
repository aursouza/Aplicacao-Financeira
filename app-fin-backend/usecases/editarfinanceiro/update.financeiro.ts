import Financeiro from 'domain/financeiro/Financeiro'
import Data from 'domain/shared/Data'
import Descricao from 'domain/shared/Descricao'
import Status from 'domain/shared/Status'
import Tipo from 'domain/shared/Tipo'
import Valor from 'domain/shared/Valor'
import { FinanceiroGateway } from 'repository/gateway/FinanceiroGateway'
import { Usecase } from 'usecases/usecase'

export type UpdateFinanceiroInputDto = {
  id: string
  tipox: string
  valorx: number
  statusx: boolean
  datax: Date
  descricaox: string
}

export type UpdateFinanceiroOutputDto = {
  id: string
  tipo: string
  valor: number
  status: boolean
  data: Date
  descricao: string
}

export class UpdateFinanceiro
  implements Usecase<UpdateFinanceiroInputDto, UpdateFinanceiroOutputDto>
{
  private constructor(private readonly finGateway: FinanceiroGateway) {}

  public static create(finGateway: FinanceiroGateway) {
    return new UpdateFinanceiro(finGateway)
  }

  async execute({
    id,
    tipox,
    valorx,
    statusx,
    datax,
    descricaox,
  }: UpdateFinanceiroInputDto): Promise<UpdateFinanceiroOutputDto> {
    const tipo = new Tipo(tipox)
    const valor = new Valor(valorx)
    const status = new Status(statusx)
    const data = new Data(datax)
    const descricao = new Descricao(descricaox)
    const registro = Financeiro.with({
      id,
      tipo,
      valor,
      status,
      data,
      descricao,
    })
    await this.finGateway.update(registro)
    const output = this.presentOutput(registro)
    return output
  }

  private presentOutput(financas: Financeiro): UpdateFinanceiroOutputDto {
    const output: UpdateFinanceiroOutputDto = {
      id: financas.id,
      tipo: financas.tipo.value,
      valor: financas.valor.value,
      status: financas.status.value,
      data: financas.data.value,
      descricao: financas.descricao.value,
    }
    return output
  }
}
