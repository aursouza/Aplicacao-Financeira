'use client'

import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react'
import { useState } from 'react'

interface SelectEntryRegistryProps {
  name: string
  input: string
  onSelectChange: (value: string) => void
  value: string
}
const type: string[] = ['despesa', 'receita']
export default function SelectEntryRegistry(props: SelectEntryRegistryProps) {
  const [stateOption, setStateOption] = useState(props.input)
  const handleSelectChange = (e: any) => {
    props.onSelectChange(e.target.value)
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
        value={props.value}
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
