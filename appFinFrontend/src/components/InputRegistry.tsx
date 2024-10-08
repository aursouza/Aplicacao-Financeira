import { useState, useContext } from 'react'
import { InputValorContext } from './EntryViewMode'
interface InputRegistryProps {
  name: string
  label: string
  value: string | number
}

export default function InputRegistry(props: InputRegistryProps) {
  let { inputValue, setInputValue } = useContext(InputValorContext)
  const { label } = props
  const [InputText, setInputText] = useState(props.value)

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value)
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
function setInputData(value: any) {
  throw new Error('Function not implemented.')
}
