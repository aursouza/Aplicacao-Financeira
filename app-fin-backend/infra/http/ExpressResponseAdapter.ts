import { type Response } from 'express'
import { IHttpResponse } from './IHttpResponse'

export default class ExpressResponseAdapter implements IHttpResponse {
  constructor(private readonly response: Response) {}
  send(body: any): void {
    this.response.send(body)
  }
  json(body: any): void {
    this.response.json(body)
  }
  status(code: number): void {
    this.response.status(code)
  }
  end(): void {
    this.response.end()
  }
}
