import { FinanceiroGateway } from 'infra/repository/gateway/FinanceiroGateway'
import { Usecase } from 'usecases/usecase'
import Financeiro, { FinanceirocreateProps } from 'domain/financeiro/Financeiro'

export type ListarFinanceiroInputDto = void

export type ListarFinanceiroOutputDto = {
  reg: {
    id: string
    tipo: string
    valor: number
    status: boolean
    data: string
    descricao: string
  }[]
}

export class ListarFinanceiroUsecase
  implements Usecase<ListarFinanceiroInputDto, ListarFinanceiroOutputDto>
{
  private constructor(private readonly finGateway: FinanceiroGateway) {}

  public static create(finGateway: FinanceiroGateway) {
    return new ListarFinanceiroUsecase(finGateway)
  }

  async execute(input: void): Promise<ListarFinanceiroOutputDto> {
    const registros = await this.finGateway.list()
    const output = this.presentOutput(registros)
    return output
  }

  private presentOutput(registros: Financeiro[]): ListarFinanceiroOutputDto {
    return {
      reg: registros.map((r) => {
        return {
          id: r.id!,
          tipo: r.tipo.value.toString(),
          valor: parseFloat(r.valor.value.toString()),
          status: r.status.value,
          data: r.data.value.toString(),
          descricao: r.descricao.value.toString(),
        }
      }),
    }
  }
}
