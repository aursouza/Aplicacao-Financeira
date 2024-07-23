import {
  CreateFinanceiroInputDto,
  CreateFinanceiroOutputDto,
  CreateFinanceiroUsecase,
} from '@/usecases/createfinanceiro/create.financeiro'
import { HttpMethod, Route } from '../route'
import { Request, Response } from 'express'

export class CreateFinanceiroRoute implements Route {
  private constructor(
    private readonly path: string,
    private readonly method: HttpMethod,
    private readonly createFinanceiroService: CreateFinanceiroUsecase
  ) {}

  public static create(createFinanceiroService: CreateFinanceiroUsecase) {
    return new CreateFinanceiroRoute(
      '/registra',
      HttpMethod.POST,
      createFinanceiroService
    )
  }

  public getHandler() {
    return async (req: Request, res: Response) => {
      const { id, tipo, valor, status, data, descricao } = req.body

      const input: CreateFinanceiroInputDto = {
        id,
        tipo,
        valor,
        status,
        data,
        descricao,
      }

      const output: CreateFinanceiroOutputDto =
        await this.createFinanceiroService.execute(input)

      const response = this.present(output)
      res.status(201).json(response)
    }
  }

  private present(input: CreateFinanceiroOutputDto) {
    const response = { id: input.id }
    return response
  }

  getPath(): string {
    return this.path
  }

  getMethod(): HttpMethod {
    return this.method
  }
}
