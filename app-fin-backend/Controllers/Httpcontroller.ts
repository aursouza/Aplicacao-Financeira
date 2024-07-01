import { IHttpServer } from '../infra/http/IHttpServer'

export default class HttpController {
  constructor(readonly httpServer: IHttpServer) {
    httpServer.on('get', '/', async (req, res, next) => {
      res.send('Hello World!')
    })
  }
}
