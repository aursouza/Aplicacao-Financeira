import { IconChevronLeft } from "@tabler/icons-react";
import StatusItem from "./StatusItem";
import Link from "next/link";
import SelectEntryRegistry from "./SelectEntryRegistry";
import InputRegistry from "./InputRegistry";

const mode: string[] = ["Visualização", "Edição"];

const status: string[] = ["Consolidado", "Pendente", "Cancelado"];

const type: string[] = ["despesa", "receita"];

interface EntryViewModeProps {}

export default function EntryViewMode(props: EntryViewModeProps) {
  return (
    <div className="flex flex-col gap-5 items-start">
      <Link href={""} className="flex text-lightGray text-xl">
        <IconChevronLeft size={25} className="mr-1 " />
        <span>Voltar</span>
      </Link>

      <div className="flex justify-start items-baseline w-[730px] p-6 md:p-4 px-12 bg-lightBlack gap-3 rounded-xl md:w-full md:justify-between">
        Modo <StatusItem status={mode} />
      </div>

      <div className="flex justify-start items-baseline flex-wrap w-[730px] p-6 md:p-4 px-12 bg-lightBlack gap-5 rounded-xl md:w-full">
        <div className="flex w-full justify-between md:flex-col-reverse gap-5">
          <div className="flex flex-col items-start">
            <span className="text-bold text-inter font-bold">#RI0C381</span>
            <input
              placeholder="Descrição do registro"
              className="appearance-none bg-transparent border-b border-lightGray border-opacity-30
               text-white text-sm font-semibold
               placeholder:text-gray placeholder:font-bold md:w-full"
            ></input>
          </div>
          <div className="flex flex-col items-end md:flex-row md:justify-start md:items-center">
            <span className="text-gray text-xs md:mr-2">Status Registro</span>
            <StatusItem status={status} />
          </div>
        </div>

        <div className="flex w-full justify-between md:flex-col gap-5">
          <div className="flex flex-col">
            <InputRegistry label="Data Registro" />
          </div>
          <div className="flex flex-col">
            <span className="text-gray text-xs">Tipo de registro</span>
            <SelectEntryRegistry input={type} />
          </div>
          <InputRegistry label="Valor Registro" />
        </div>
      </div>

      <div className="flex w-[730px] p-6 md:p-4 bg-lightBlack gap-3 rounded-xl md:w-full md:flex-col">
        <button className="btn-primary">Salvar</button>
        <button className="btn-gray">Cancelar</button>
        <button className="flex btn-red ml-auto md:ml-0 md:justify-center">
          Excluir
        </button>
      </div>
    </div>
  );
}
