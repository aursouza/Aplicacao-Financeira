'use client'
import React, { useEffect, useState, createContext } from 'react'
import Header from './Header'
import ContentEmpty from './ContentEmpty'
import EntryItem from './EntryItem'

type Results = { reg: any[] }

interface InitialContentProps {
  qtreg: any
  results: Results
}
export interface Filtro {
  modo: string
}
export let FilterContext = createContext({} as any)

export default function InitialMainContent(items: InitialContentProps) {
  let vfiltro = ''
  const [filtro, setFiltro] = useState('')
  const [dados, setDados] = useState(items.results.reg)
  const [filterdados, setFilterdados] = useState(dados)

  useEffect(() => {
    if (filtro) {
      const dadosfiltrados = dados.filter((item) => item.status === filtro)
      setFilterdados(dadosfiltrados)
    } else {
      setFilterdados(dados)
    }
  }, [filtro, dados])

  function renderContent(array: any[]) {
    if (Object.keys(array).length === 0) {
      return <ContentEmpty />
    } else {
      return array.map((item) => {
        return (
          <EntryItem
            key={item.id}
            idEntry={item.id}
            dataEntry={item.data}
            valueEntry={item.valor}
            statusEntry={item.status}
            typeEntry={item.tipo}
            descriptionEntry={item.descricao}
          />
        )
      })
    }
  }
  return (
    <div className="flex flex-col gap-2 overflow-auto mt-5 sm:h-screen">
      <div>
        <FilterContext.Provider value={{ filtro, setFiltro }}>
          <Header registros={items.qtreg} />
        </FilterContext.Provider>
        {renderContent(filterdados)}
      </div>
    </div>
  )
}
