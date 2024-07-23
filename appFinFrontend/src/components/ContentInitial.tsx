'use client'
import ContentEmpty from './ContentEmpty'
import EntryItem from './EntryItem'
import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'

type Results = { reg: any[] }

interface InitialContentProps {
  qtreg: any
  results: Results
}

export default function InitialMainContent(items: InitialContentProps) {
  const [filtro, setFiltro] = useState('')
  const [dados, setDados] = useState(items.results.reg)
  const [filterdados, setFilterdados] = useState(dados)

  const handleFiltro = (Filtro: string) => {
    Filtro == 'Filtrar por Status' ? (Filtro = '') : Filtro
    setFiltro(Filtro)
  }

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
        <Header registros={items.qtreg} onfiltro={handleFiltro} />
        {renderContent(filterdados)}
      </div>
    </div>
  )
}
