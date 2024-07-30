import { useContext, useState } from 'react'
import { InputDataContext } from './EntryViewMode'

interface InputRegistryProps {
  name: string
  label: string
  value: string | number
}

export default function InputRegistryData(props: InputRegistryProps) {
  let { inputData, setInputData } = useContext(InputDataContext)
  const { label } = props
  const [InputText, setInputText] = useState(props.value)

  const handleInputChange = (e: any) => {
    setInputData(e.target.value)
    setInputText(e.target.value)
  }

  return (
    <div className="flex flex-col">
      <span className="text-gray text-xs">{label}</span>
      <input
        className="appearance-none bg-transparent border-b border-lightGray border-opacity-30
               text-white text-sm font-semibold"
        value={InputText}
        onChange={handleInputChange}
      />
    </div>
  )
}
