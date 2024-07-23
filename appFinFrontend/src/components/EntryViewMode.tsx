'use client'
import { IconChevronLeft } from '@tabler/icons-react'
import StatusItem from './StatusItem'
import Link from 'next/link'
import SelectEntryRegistry from './SelectEntryRegistry'
import InputRegistry from './InputRegistry'
import { useState, useRef, useEffect } from 'react'
import StatusMode from './SelectMode'
import { formatDate } from '@/utils/date'
import formatValue from '@/utils/currency'
import { HandlerCreate, HandlerDelete, HandlerUpdate } from '@/api/dados'

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

export default function EntryViewMode(props: EntryViewModeProps) {
  const tmode = parseInt(props.tipovisualização)
  const [selectItem, setSelectItem] = useState(props.statusEntry)
  const [inputData, setInputData] = useState(props.dataEntry)
  const refData = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState(props.valueEntry)
  const refValue = useRef<HTMLInputElement>(null)
  const [selectType, setSelectType] = useState(props.typeEntry)
  const [selectMode, setSelectMode] = useState(mode[tmode])
  const [inputDescricao, setInputDescricao] = useState(props.descriptionEntry)
  const [showButtonExcluir, setShowButtonExcluir] = useState(false)

  useEffect(() => {
    props.idEntry === ''
      ? setShowButtonExcluir(false)
      : setShowButtonExcluir(true)
  }, [])

  const handleDecriptionChange = (e: any): void => {
    setInputDescricao(e.target.value)
  }
  const handleSelectTypeChange = (e: any) => {
    setSelectType(e)
  }
  const handleSelectChange = (e: any): void => {
    setSelectItem(e)
  }
  const handleInputDataChange = (e: any): any => {
    setInputData(e)
  }
  const handleValorChange = (e: any): any => {
    setInputValue(e)
  }
  const handleSelectModeChange = (e: any) => {
    setSelectMode(e)
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
      id: props.idEntry,
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
    props.idEntry ? handleUpdateButton() : handleSaveButton()
  }

  return (
    <div className="flex flex-col gap-5 items-start">
      <Link href={'/'} className="flex text-lightGray text-xl">
        <IconChevronLeft size={25} className="mr-1 " />
        <span>Voltar</span>
      </Link>

      <div className="flex justify-start items-baseline w-[730px] p-6 md:p-4 px-12 bg-lightBlack gap-3 rounded-xl md:w-full md:justify-between">
        Modo
        <StatusMode
          mode={selectMode}
          value={selectMode}
          onSelectChange={handleSelectModeChange}
        />
      </div>

      <div className="flex justify-start items-baseline flex-wrap w-[730px] p-6 md:p-4 px-12 bg-lightBlack gap-5 rounded-xl md:w-full">
        <div className="flex w-full justify-between md:flex-col-reverse gap-5">
          <div className="flex flex-col items-start">
            <span className="text-bold text-inter font-bold">
              {props.idEntry.substring(0, 8)}
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
            <StatusItem
              name="status"
              key={props.idEntry}
              value={selectItem}
              status={props.statusEntry}
              onSelectChange={handleSelectChange}
            />
          </div>
        </div>
        <div className="flex w-full justify-between md:flex-col gap-5">
          <div className="flex flex-col">
            <InputRegistry
              name="data"
              label="Data Registro"
              value={formatDate(inputData)}
              onChange={handleInputDataChange}
              inputref={refData}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-gray text-xs">Tipo de registro</span>
            <SelectEntryRegistry
              name="tipo"
              input={selectType}
              onSelectChange={handleSelectTypeChange}
              value={selectType}
            />
          </div>
          <InputRegistry
            name="valor"
            label="Valor Registro"
            value={formatValue.format(parseFloat(inputValue))}
            onChange={handleValorChange}
            inputref={refValue}
          />
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