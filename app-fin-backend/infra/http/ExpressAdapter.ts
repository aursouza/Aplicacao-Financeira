import express, {
  type Request,
  type Response,
  type NextFunction,
} from 'express'
import { IHttpServer } from './IHttpServer'

export default class ExpressAdapter implements IHttpServer {
  private readonly app: any
  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }
  on(
    method: string,
    url: string,
    callback: (req: Request, res: Response, next: NextFunction) => void
  ): void {
    this.app[method](
      url,
      callback,
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const output = await callback(req, res, next)
          res.json(output)
        } catch (error: any) {
          next(error)
        }
      }
    )
  }

  public listen(port: number): void {
    this.app.listen(port)
    console.log(`O servidor está rodando na porta ${port}`)
  }

  public close(): void {
    this.app.close()
  }
}
