import axios from 'axios'

const bckurl = 'http://192.168.15.25:8000'
export async function HandlerList() {
  const response = await axios.get(`${bckurl}/list`)
  return response.data
}

export async function HandlerUpdate(data: any) {
  const response = await axios.put(`${bckurl}/altera`, {
    id: data.id,
    tipo: data.tipo,
    valor: data.valor,
    status: data.status,
    data: data.data,
    descricao: data.descricao,
  })

  return response
}

export async function HandlerCreate(data: any) {
  const response = await axios.post(`${bckurl}/registra`, {
    tipo: data.tipo,
    valor: data.valor,
    status: data.status,
    data: data.data,
    descricao: data.descricao,
  })
  return response
}

export async function HandlerDelete(datax: any) {
  const response = await axios.delete(`${bckurl}/excluir`, {
    data: { id: datax },
  })

  return response
}
