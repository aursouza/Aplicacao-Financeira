import { Request, Response } from 'express'
import { HttpMethod, Route } from '../route'
import {
  DeleteFinanceiroInputDto,
  DeleteFinanceiroUsecase,
} from '@/usecases/excluirfinanceiro/delete.financeiro'

export class DeleteFinanceiroRoute implements Route {
  private constructor(
    private readonly path: string,
    private readonly method: HttpMethod,
    private readonly deleteFinanceiroService: DeleteFinanceiroUsecase
  ) {}

  public static create(deleteFinanceiroService: DeleteFinanceiroUsecase) {
    return new DeleteFinanceiroRoute(
      '/excluir',
      HttpMethod.DELETE,
      deleteFinanceiroService
    )
  }
  public getHandler(): (req: Request, res: Response) => Promise<void> {
    return async (req: Request, res: Response) => {
      const id = req.body.id

      const input: DeleteFinanceiroInputDto = {
        id,
      }

      const output = await this.deleteFinanceiroService.execute(input)
    }
  }
  getPath(): string {
    return this.path
  }
  getMethod(): HttpMethod {
    return this.method
  }
}
