import express, { Request } from 'express'
import cors from 'cors'
import { Route } from '@/infra/api/routes/route'
import { Api } from '@/infra/api/api'
import bodyParser from 'body-parser'

export default class ExpressAdapter implements Api {
  private readonly app: any
  private constructor(routes: Route[]) {
    this.app = express()
    this.app.use(express.json())
    this.app.use(cors<Request>())
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(bodyParser.json())
    //this.app.use(express.urlencoded({ extended: true })) /* Este codigo foi retirado para inserir BodyParser, porém funcionou bem anteriormente ao teste com o react */
    this.addRoutes(routes)
  }

  public static create(routes: Route[]) {
    return new ExpressAdapter(routes)
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })
  }

  private addRoutes(routes: Route[]) {
    routes.forEach((route) => {
      const path = route.getPath()
      const method = route.getMethod()
      const handler = route.getHandler()

      this.app[method](path, handler)
    })
  }
}
