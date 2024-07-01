import ExpressAdapter from '../infra/http/ExpressAdapter'

const app = new ExpressAdapter()
const port = 3000

app.on('get', '/', async (req, res, next) => {
  res.send('Blz!!! Funcionando!')
})

app.listen(port)
