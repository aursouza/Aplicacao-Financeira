import { FinanceiroGateway } from 'infra/repository/gateway/FinanceiroGateway'
import { Usecase } from 'usecases/usecase'
import Financeiro from 'domain/financeiro/Financeiro'

export type CreateFinanceiroInputDto = {
  id: string
  tipo: string
  valor: number
  status: string
  data: string
  descricao: string
}

export type CreateFinanceiroOutputDto = {
  id: string
}

export class CreateFinanceiroUsecase
  implements Usecase<CreateFinanceiroInputDto, CreateFinanceiroOutputDto>
{
  private constructor(private readonly finGateway: FinanceiroGateway) {}

  public static create(financeiroGateway: FinanceiroGateway) {
    return new CreateFinanceiroUsecase(financeiroGateway)
  }

  public async execute({
    id,
    tipo,
    valor,
    status,
    data,
    descricao,
  }: CreateFinanceiroInputDto): Promise<CreateFinanceiroOutputDto> {
    const registro = Financeiro.create({
      id,
      tipo,
      valor,
      status,
      data,
      descricao,
    })
    await this.finGateway.save(registro)
    const output = this.presentOutput(registro)
    return output
  }

  private presentOutput(financas: Financeiro): CreateFinanceiroOutputDto {
    const output: CreateFinanceiroOutputDto = {
      id: financas.id!,
    }
    return output
  }
}
