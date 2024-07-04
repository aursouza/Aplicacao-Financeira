import { IHttpRequest } from './IHttpRequest'

export default class ExpressRequestseAdapter implements IHttpRequest {
  body: any
  params: any
  query: any
  headers: any
  cookies?: any
  statusCode?: number | undefined

  constructor(req: any) {
    this.body = req.body
    this.params = req.params
    this.query = req.query
    this.headers = req.headers
    this.cookies = req.cookies
    this.statusCode = req.statusCode
  }
}
