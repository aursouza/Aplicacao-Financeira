'use client'
import { IconChevronLeft } from '@tabler/icons-react'
import StatusItem from './StatusItem'
import Link from 'next/link'
import SelectEntryRegistry from './SelectEntryRegistry'
import InputRegistry from './InputRegistry'
import { useState, useEffect, createContext } from 'react'
import { formatDate } from '@/utils/date'
import formatValue from '@/utils/currency'
import { HandlerCreate, HandlerDelete, HandlerUpdate } from '@/api/dados'
import StatusMode from './SelectMode'
import InputRegistryData from './InputRegistryData'

const mode: string[] = ['Visualização', 'Edição']

interface EntryViewModeProps {
  idEntry: string
  typeEntry: string
  valueEntry: string
  statusEntry: string
  dataEntry: string
  descriptionEntry: string
  tipovisualização: string
}
export let SelectModeContext = createContext({} as any)
export let SelectItemContext = createContext({} as any)
export let InputDataContext = createContext({} as any)
export let InputValorContext = createContext({} as any)
export let SelectEntryContext = createContext({} as any)

export default function EntryViewMode(props: EntryViewModeProps) {
  const tmode = parseInt(props.tipovisualização)
  const [inputIdEntry] = useState(props.idEntry)
  const [selectItem, setSelectItem] = useState(props.statusEntry)
  const [inputData, setInputData] = useState(props.dataEntry)
  const [inputValue, setInputValue] = useState(props.valueEntry)
  const [selectType, setSelectType] = useState(props.typeEntry)
  const [selectMode, setSelectMode] = useState(mode[tmode])
  const [inputDescricao, setInputDescricao] = useState(props.descriptionEntry)
  const [showButtonExcluir, setShowButtonExcluir] = useState(false)

  useEffect(() => {
    inputIdEntry === ''
      ? setShowButtonExcluir(false)
      : setShowButtonExcluir(true)
  }, [inputIdEntry])

  const handleDecriptionChange = (e: any): void => {
    setInputDescricao(e.target.value)
  }
  const handleSaveButton = () => {
    const data = {
      tipo: selectType,
      valor: parseFloat(
        inputValue.replace('R$', '').replace('.', '').replace(',', '.')
      ),
      status: selectItem,
      data: inputData,
      descricao: inputDescricao,
    }
    HandlerCreate(data)
  }

  const handleUpdateButton = () => {
    const data = {
      id: inputIdEntry,
      tipo: selectType,
      valor: parseFloat(
        inputValue.replace('R$', '').replace('.', '').replace(',', '.')
      ),
      status: selectItem,
      data: inputData,
      descricao: inputDescricao,
    }

    HandlerUpdate(data)
  }

  const handleDeleteButton = () => {
    HandlerDelete(props.idEntry)
  }

  const handleData = (e: any) => {
    e.preventDefault()
    inputIdEntry ? handleUpdateButton() : handleSaveButton()
  }

  return (
    <div className="flex flex-col gap-5 items-start">
      <Link href={'/'} className="flex text-lightGray text-xl">
        <IconChevronLeft size={25} className="mr-1 " />
        <span>Voltar</span>
      </Link>

      <div className="flex justify-start items-baseline w-[730px] p-6 md:p-4 px-12 bg-lightBlack gap-3 rounded-xl md:w-full md:justify-between">
        Modo
        <SelectModeContext.Provider value={{ selectMode, setSelectMode }}>
          <StatusMode mode={selectMode} />
        </SelectModeContext.Provider>
      </div>

      <div className="flex justify-start items-baseline flex-wrap w-[730px] p-6 md:p-4 px-12 bg-lightBlack gap-5 rounded-xl md:w-full">
        <div className="flex w-full justify-between md:flex-col-reverse gap-5">
          <div className="flex flex-col items-start">
            <span className="text-bold text-inter font-bold">
              {inputIdEntry.substring(0, 8)}
            </span>
            <input
              placeholder="Descrição do registro"
              className="appearance-none bg-transparent border-b border-lightGray border-opacity-30
               text-white text-sm font-semibold
               placeholder:text-gray placeholder:font-bold md:w-full"
              name="Description"
              value={inputDescricao}
              onChange={handleDecriptionChange}
            ></input>
          </div>
          <div className="flex flex-col items-end md:flex-row md:justify-start md:items-center">
            <span className="text-gray text-xs md:mr-2">Status Registro</span>
            <SelectItemContext.Provider value={{ selectItem, setSelectItem }}>
              <StatusItem name="status" value={selectItem} key={inputIdEntry} />
            </SelectItemContext.Provider>
          </div>
        </div>
        <div className="flex w-full justify-between md:flex-col gap-5">
          <div className="flex flex-col">
            <InputDataContext.Provider value={{ inputData, setInputData }}>
              <InputRegistryData
                name="data"
                label="Data Registro"
                value={formatDate(inputData)}
              />
            </InputDataContext.Provider>
          </div>
          <div className="flex flex-col">
            <span className="text-gray text-xs">Tipo de registro</span>
            <SelectEntryContext.Provider value={{ selectType, setSelectType }}>
              <SelectEntryRegistry name="tipo" input={selectType} />
            </SelectEntryContext.Provider>
          </div>
          <InputValorContext.Provider value={{ inputValue, setInputValue }}>
            <InputRegistry
              name="valor"
              label="Valor Registro"
              value={formatValue.format(parseFloat(inputValue))}
            />
          </InputValorContext.Provider>
        </div>
      </div>

      <div className="flex w-[730px] p-6 md:p-4 bg-lightBlack gap-3 rounded-xl md:w-full md:flex-col">
        <button
          className="btn-primary"
          disabled={selectMode === 'Visualização' ? true : false}
          onClick={handleData}
        >
          Salvar
        </button>

        <Link href={'/'} className="flex text-lightGray text-xl">
          <button className="btn-gray">Cancelar</button>
        </Link>
        {showButtonExcluir && (
          <button
            className="flex btn-red ml-auto md:ml-0 md:justify-center"
            disabled={selectMode === 'Visualização' ? true : false}
            onClick={handleDeleteButton}
          >
            Excluir
          </button>
        )}
      </div>
    </div>
  )
}
