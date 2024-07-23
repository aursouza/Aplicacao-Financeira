import { Request, Response } from 'express'
import { HttpMethod, Route } from './route'
import {
  ListarFinanceiroUsecase,
  ListarFinanceiroOutputDto,
} from 'usecases/Listarfinanceiro/listarfinanceiro'

export type ListFinanceiroResponseDto = {
  reg: {
    id: string
    tipo: string
    valor: number
    status: string
    data: string
    descricao: string
  }[]
}

export class PrincipalRoute implements Route {
  private constructor(
    private readonly path: string,
    private readonly method: HttpMethod,
    private readonly listarFinanceiroService: ListarFinanceiroUsecase
  ) {}

  public static create(listarFinanceiroService: ListarFinanceiroUsecase) {
    return new PrincipalRoute('/', HttpMethod.GET, listarFinanceiroService)
  }

  public getHandler() {
    return async (req: Request, res: Response) => {
      const output = await this.listarFinanceiroService.execute()
      const responsebody = this.present(output)
      res.status(200).json(responsebody)
    }
  }

  private present(input: ListarFinanceiroOutputDto): ListFinanceiroResponseDto {
    const response: ListFinanceiroResponseDto = {
      reg: input.reg.map((r) => ({
        id: r.id!,
        tipo: r.tipo,
        valor: r.valor,
        status: r.status,
        data: r.data.toISOString(),
        descricao: r.descricao,
      })),
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
