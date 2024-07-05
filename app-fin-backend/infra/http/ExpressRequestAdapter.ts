import { IHttpRequest } from './IHttpRequest'
import { type Request } from 'express'

export default class ExpressRequestseAdapter implements IHttpRequest {
  _body: any
  _params: any
  _query: any
  _headers: any
  _cookies?: any
  _statusCode?: number | undefined

  constructor(req: Request) {
    this._body = req.body
    this._params = req.params
    this._query = req.query
    this._headers = req.headers
    this._cookies = req.cookies
    this._statusCode = req.statusCode
  }

  public get body() {
    return this._body
  }
  public get params() {
    return this._params
  }
  public get query() {
    return this._query
  }
  public get headers() {
    return this._headers
  }
  public get cookies() {
    return this._cookies
  }
  public get statusCode() {
    return this._statusCode
  }
}
