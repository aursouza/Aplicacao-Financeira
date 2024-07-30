'use client'
import { IconChevronRight } from '@tabler/icons-react'
import StatusItem from './StatusItem'
import EntryType from './EntryType'
import { formatDate } from '@/utils/date'
import { createContext, useState } from 'react'
import Link from 'next/link'

interface EntryItemProps {
  idEntry: string
  typeEntry: string
  valueEntry: number
  statusEntry: string
  dataEntry: string
  descriptionEntry: string
}

export let SelectItemContext = createContext({} as any)
export default function EntryItem(props: EntryItemProps) {
  const [selectItem, setSelectItem] = useState(props.statusEntry)

  return (
    <div
      className="flex justify-around items-baseline pt-4 w-[730px] h-[60px] rounded-lg p-2 bg-lightBlack
                sm:flex-row sm:flex-wrap sm:justify-between sm:w-full sm:h-auto sm:pl-3 sm:pr-3 sm:pb-3"
    >
      <span className="text-inter font-medium ml-5 sm:ml-0">
        {props.idEntry.substring(0, 8)}
      </span>
      <span className="font-light text-lightGray">
        {formatDate(props.dataEntry)}
      </span>
      <span className="font-light w-1/4 sm:w-full ">
        {props.descriptionEntry}
      </span>

      <div className="flex gap-3 justify-end items-center w-[300px] sm:w-full sm:justify-between">
        <EntryType value={props.valueEntry} type={props.typeEntry} />
        <SelectItemContext.Provider value={{ selectItem, setSelectItem }}>
          <StatusItem name="status" value={selectItem} key={props.idEntry} />
        </SelectItemContext.Provider>
        <Link
          href={{
            pathname: 'viewentry',
            query: {
              idEntry: props.idEntry,
              dataEntry: props.dataEntry,
              typeEntry: props.typeEntry,
              valueEntry: props.valueEntry,
              statusEntry: props.statusEntry,
              descriptionEntry: props.descriptionEntry,
              tipoview: 0,
            },
          }}
        >
          <IconChevronRight size={10} className="mr-5 sm:hidden" />
        </Link>
      </div>
    </div>
  )
}
