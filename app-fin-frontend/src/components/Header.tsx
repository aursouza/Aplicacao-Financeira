import { RefObject } from 'react'
import ButtonEntry from './ButtonEntry'
import Select from './Select'
import Link from 'next/link'

interface HeaderProps {
  registros: any
  onfiltro: (value: string) => void
}

export default function Header(props: HeaderProps) {
  const handleSelectFilter = (filter: any) => {
    props.onfiltro(filter)
  }
  return (
    <div className="flex w-[730px] justify-between items-start sm:flex-col md:items-center md:w-auto">
      <div className="flex flex-col md:items-center">
        <h1 className="text-4xl lg:text-3xl">Minhas Finanças</h1>
        <p>{`Você possui ${props.registros} registro(s)`}</p>
      </div>
      <div className="flex ml-10 md:ml-0 md:mt-5 ">
        <Select onSelectChange={handleSelectFilter} />
        <Link href="entrydata">
          <ButtonEntry />
        </Link>
      </div>
    </div>
  )
}
