import express from 'express'
import { Route } from 'infra/api/routes/route'
import { Api } from 'infra/api/api'

export default class ExpressAdapter implements Api {
  private readonly app: any
  private constructor(routes: Route[]) {
    this.app = express()
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
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
