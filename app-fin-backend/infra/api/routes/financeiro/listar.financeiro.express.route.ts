import { Request, Response } from 'express'
import { HttpMethod, Route } from '../route'
import { ListarFinanceiroUsecase } from 'usecases/Listarfinanceiro/listarfinanceiro'

export type ListFinanceiroResponseDto = {
  reg: {
    id: string
    tipo: string
    valor: number
    status: boolean
    data: string
    descricao: string
  }[]
}

export class ListarFinanceiroRoute implements Route {
  private constructor(
    private readonly path: string,
    private readonly method: HttpMethod,
    private readonly listarFinanceiroService: ListarFinanceiroUsecase
  ) {}

  public static create(listarFinanceiroService: ListarFinanceiroUsecase) {
    return new ListarFinanceiroRoute(
      '/list',
      HttpMethod.GET,
      listarFinanceiroService
    )
  }

  public getHandler() {
    return async (req: Request, res: Response) => {
      const output = await this.listarFinanceiroService.execute()
      const responsebody = this.present(output)
      res.status(200).json(responsebody).send()
    }
  }

  private present(input: ListFinanceiroResponseDto): ListFinanceiroResponseDto {
    const response: ListFinanceiroResponseDto = {
      reg: input.reg.map((r) => ({
        id: r.id!,
        tipo: r.tipo,
        valor: r.valor,
        status: r.status,
        data: r.data,
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
