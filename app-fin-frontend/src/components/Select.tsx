import { IconChevronDown } from '@tabler/icons-react'
import { useState } from 'react'

const statusmodes: string[] = ['Consolidado', 'Pendente', 'Cancelado']
interface FilterProps {
  onSelectChange: (value: string) => void
}
export default function Select(props: FilterProps) {
  const [filterOption, setFilterOption] = useState()
  const handleSelectChange = (e: any) => {
    props.onSelectChange(e.target.value)
    setFilterOption(e.target.value)
  }
  return (
    <div className="flex justify-center items-center mr-10 md:mr-1 h-[48px]">
      <select
        className="bg-transparent appearance-none text-center"
        onChange={handleSelectChange}
        value={filterOption}
      >
        <option value="">Filtrar por Status</option>
        {statusmodes.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          )
        })}
      </select>
      <IconChevronDown className="text-primary" stroke={3} />
    </div>
  )
}
