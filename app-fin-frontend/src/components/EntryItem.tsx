'use client'
import { IconChevronRight } from '@tabler/icons-react'
import Status from './StatusItem'
import EntryType from './EntryType'
import { formatDate } from '@/utils/date'
import { useState } from 'react'
import Link from 'next/link'

interface EntryItemProps {
  idEntry: string
  typeEntry: string
  valueEntry: number
  statusEntry: string
  dataEntry: string
  descriptionEntry: string
}

export default function EntryItem(props: EntryItemProps) {
  const [selectItem, setSelectItem] = useState(props.statusEntry)

  function handleSelectChange(item: string): void {
    setSelectItem(item)
  }

  return (
    <div
      className="flex justify-around items-baseline pt-4 w-[730px] h-[60px] rounded-lg bg-lightBlack
                sm:flex-row sm:flex-wrap sm:justify-between sm:w-full sm:h-auto sm:pl-3 sm:pr-3 sm:pb-3"
    >
      <span className="text-inter font-medium ml-5 sm:ml-0">
        {props.idEntry}
      </span>
      <span className="font-light text-lightGray">
        {formatDate(props.dataEntry)}
      </span>
      <span className="font-light w-1/4 sm:w-full ">
        {props.descriptionEntry}
      </span>

      <div className="flex gap-3 justify-end items-center w-[300px] sm:w-full sm:justify-between">
        <EntryType value={props.valueEntry} type={props.typeEntry} />
        <Status
          name="status"
          key={props.idEntry}
          status={props.statusEntry}
          value={selectItem}
          onSelectChange={handleSelectChange}
        />
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
