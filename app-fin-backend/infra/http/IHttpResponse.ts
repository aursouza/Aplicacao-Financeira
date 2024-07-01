export interface IHttpResponse {
  send(body: any): void
  json(body: any): void
  status(code: number): void
  end(): void
}
