'use client'
import { IconPointFilled } from '@tabler/icons-react'
import { useState, useContext } from 'react'
import { SelectModeContext } from './EntryViewMode'

interface StatusProps {
  mode: String
}

export default function StatusMode(props: StatusProps) {
  let { selectMode, setSelectMode } = useContext(SelectModeContext)
  const mode: string[] = ['Visualização', 'Edição']
  const [stateOptionStatus, setStateOptionStatus] = useState(props.mode)
  const handleSelectChange = (e: any) => {
    setSelectMode(e.target.value)
    setStateOptionStatus(e.target.value)
  }
  return (
    <div
      className={`bg-${stateOptionStatus} text-${stateOptionStatus} rounded-sm flex justify-center items-center w-[110px]`}
    >
      <IconPointFilled size={15} className={`text-${stateOptionStatus}`} />

      <select
        className="px-0.5 pt-1 font-bold bg-transparent text-sm text-center appearance-none"
        onChange={handleSelectChange}
        value={selectMode}
      >
        {mode.map((item, index) => {
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
