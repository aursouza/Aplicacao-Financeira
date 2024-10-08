import { FinanceiroGateway } from '@/infra/repository/gateway/FinanceiroGateway'
import { Usecase } from '@/usecases/usecase'

export type DeleteFinanceiroInputDto = {
  id: string
}

export class DeleteFinanceiroUsecase
  implements Usecase<DeleteFinanceiroInputDto, void>
{
  private constructor(private readonly finGateway: FinanceiroGateway) {}

  public static create(finGateway: FinanceiroGateway) {
    return new DeleteFinanceiroUsecase(finGateway)
  }

  async execute({ id: id }: DeleteFinanceiroInputDto): Promise<void> {
    await this.finGateway.delete(id)
  }
}
