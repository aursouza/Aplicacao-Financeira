'use client'
import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react'
import { useState, useContext } from 'react'
import { SelectEntryContext } from './EntryViewMode'

interface SelectEntryRegistryProps {
  name: string
  input: string
}
const type: string[] = ['despesa', 'receita']
export default function SelectEntryRegistry(props: SelectEntryRegistryProps) {
  let { selectType, setSelectType } = useContext(SelectEntryContext)
  const [stateOption, setStateOption] = useState(props.input)
  const handleSelectChange = (e: any) => {
    setSelectType(e.target.value)
    setStateOption(e.target.value)
  }
  return (
    <div
      className={`flex justify-center border-b border-lightGray border-opacity-30 text-${
        stateOption === 'despesa' ? 'red' : 'green'
      }`}
    >
      <span>
        {stateOption === 'despesa' ? (
          <IconTrendingDown size={15} />
        ) : (
          <IconTrendingUp size={15} />
        )}
      </span>
      <select
        className="bg-transparent font-semibold text-sm text-center uppercase"
        onChange={handleSelectChange}
        value={selectType}
      >
        {type.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}
