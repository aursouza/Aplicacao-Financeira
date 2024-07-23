'use client'
import { IconPointFilled } from '@tabler/icons-react'
import { useState } from 'react'

interface StatusProps {
  name: string
  status: string
  onSelectChange: (value: string) => void
  value: string
}

export default function StatusItem(props: StatusProps) {
  const statusvm: string[] = ['Consolidado', 'Pendente', 'Cancelado']
  const [stateOptionStatus, setStateOptionStatus] = useState(props.status)
  const handleSelectChange = (e: any) => {
    props.onSelectChange(e.target.value)
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
        value={stateOptionStatus}
      >
        {statusvm.map((item, index) => {
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
