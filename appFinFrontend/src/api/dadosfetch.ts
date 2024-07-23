export async function HandlerList() {
  const response = await fetch('http://localhost:8000/list', {
    next: { revalidate: 10 },
  })
  if (!response.ok) {
    throw new Error('Falha ao fazer a requisição.')
  }
  return response
}

export async function HandlerUpdatefetch(data: any) {
  const vetor = JSON.stringify(data)
  const response = await fetch('http://localhost:8000/altera', {
    method: 'PUT',
    body: vetor,
  })
  if (!response.ok) {
    throw new Error('Falha ao fazer a requisição.')
  }
  return response
}

export async function HandlerCreatefetch(data: any) {
  const response = await fetch('http://localhost:8000/registra', {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(data),
  })
  if (!response.ok) {
    throw new Error('Falha ao fazer a requisição.')
  }
  return response
}

export async function HandlerDeletefetch(idcode: any) {
  const response = await fetch('http://localhost:8000/excluir', {
    method: 'DELETE',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(idcode),
  })
  if (!response.ok) {
    throw new Error('Falha ao fazer a requisição.')
  }
  return response
}
