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
      console.log('No handler')
      console.log(req.params)
      const { id } = req.body

      const input: DeleteFinanceiroInputDto = {
        id,
      }

      res.status(200).json(id)
      // const output = await this.deleteFinanceiroService.execute(input)
    }
  }
  getPath(): string {
    return this.path
  }
  getMethod(): HttpMethod {
    return this.method
  }
}
