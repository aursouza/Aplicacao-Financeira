import { IconChevronRight } from "@tabler/icons-react";

import Status from "./StatusItem";
import EntryType from "./EntryType";
import { formatDate } from "@/utils/date";

interface EntryItemProps {
  idEntry: string;
  dataEntry: string;
  descriptionEntry: string;
  typeEntry: string;
  valueEntry: number;
  statusEntry: string;
}

export default function EntryItem(props: EntryItemProps) {
  const {
    idEntry,
    dataEntry,
    descriptionEntry,
    typeEntry,
    valueEntry,
    statusEntry,
  } = props;

  return (
    <div
      className="flex justify-around items-baseline pt-4 w-[730px] h-[60px] rounded-lg bg-lightBlack
                sm:flex-row sm:flex-wrap sm:justify-between sm:w-full sm:h-auto sm:pl-3 sm:pr-3 sm:pb-3"
    >
      <span className="text-inter font-medium ml-5 sm:ml-0">{idEntry}</span>
      <span className="font-light text-lightGray">{formatDate(dataEntry)}</span>
      <span className="font-light w-1/4 sm:w-full ">{descriptionEntry}</span>

      <div className="flex gap-3 justify-end items-center w-[300px] sm:w-full sm:justify-between">
        <EntryType value={valueEntry} type={typeEntry} />
        <Status status={statusEntry} />
        <IconChevronRight size={10} className="mr-5 sm:hidden" />
      </div>
    </div>
  );
}
