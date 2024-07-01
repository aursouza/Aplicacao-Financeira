import { IHttpRequest } from './IHttpRequest'
import { IHttpResponse } from './IHttpResponse'

export interface IHttpServer {
  on(
    method: string,
    url: string,
    callback: (req: IHttpRequest, res: IHttpResponse, next: any) => void
  ): void
  close(): void
  listen(port: number): void
}
