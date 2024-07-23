import axios from 'axios'

export async function HandlerList() {
  const response = await axios.get('http://localhost:8000/list')

  return response.data
}

export async function HandlerUpdate(data: any) {
  const response = await axios.put('http://localhost:8000/altera', {
    id: data.id,
    tipo: data.tipo,
    valor: data.valor,
    status: data.status,
    data: data.data,
    descricao: data.descricao,
  })
  console.log('response ', response)
  return response
}

export async function HandlerCreate(data: any) {
  const response = await axios.post('http://localhost:8000/registra', {
    tipo: data.tipo,
    valor: data.valor,
    status: data.status,
    data: data.data,
    descricao: data.descricao,
  })
  return response
}

export async function HandlerDelete(data: any) {
  const response = await axios(`http://localhost:8000/excluir/${data}`)

  return response
}
