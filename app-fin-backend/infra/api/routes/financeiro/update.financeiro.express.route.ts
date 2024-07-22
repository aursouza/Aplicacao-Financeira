import { HttpMethod, Route } from '../route'
import { Request, Response } from 'express'
import {
  UpdateFinanceiroUsecase,
  UpdateFinanceiroInputDto,
  UpdateFinanceiroOutputDto,
} from '../../../../usecases/editarfinanceiro/update.financeiro'

export class UpdateFinanceiroRoute implements Route {
  private constructor(
    private readonly path: string,
    private readonly method: HttpMethod,
    private readonly updateFinanceiroService: UpdateFinanceiroUsecase
  ) {}

  public static create(updateFinanceiroService: UpdateFinanceiroUsecase) {
    return new UpdateFinanceiroRoute(
      '/altera',
      HttpMethod.PUT,
      updateFinanceiroService
    )
  }
  getHandler(): (req: Request, res: Response) => Promise<void> {
    return async (req: Request, res: Response) => {
      const { id, tipo, valor, status, data, descricao } = req.body

      const input: UpdateFinanceiroInputDto = {
        id,
        tipo,
        valor,
        status,
        data,
        descricao,
      }

      const output: UpdateFinanceiroOutputDto =
        await this.updateFinanceiroService.execute(input)

      const response = this.present(output)
      res.status(201).json(response)
    }
  }
  private present(input: UpdateFinanceiroOutputDto) {
    const response = {
      id: input.id,
      tipo: input.tipo,
      valor: input.valor,
      status: input.status,
      data: input.data,
      descricao: input.descricao,
    }
    return response
  }

  getPath(): string {
    return this.path
  }
  getMethod(): HttpMethod {
    return this.method
  }
}
