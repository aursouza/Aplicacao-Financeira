import { useState, useRef, RefObject, ElementRef } from 'react'
interface InputRegistryProps {
  name: string
  label: string
  value: string | number
  onChange: (value: string) => string
  inputref: RefObject<ElementRef<'input'>>
}

export default function InputRegistry(props: InputRegistryProps) {
  const { label } = props
  const [InputText, setInputText] = useState(props.value)

  const handleInputChange = (e: any) => {
    props.onChange(e.target.value)
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
        ref={props.inputref}
      />
    </div>
  )
}
