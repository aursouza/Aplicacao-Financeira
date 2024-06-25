import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import StatusItem from "./StatusItem";

export default function EntryViewMode() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-start items-baseline w-[730px] p-6 md:p-4 px-12 bg-lightBlack gap-3 rounded-xl md:w-full md:justify-between">
        Modo <StatusItem status="Visualização" />
      </div>

      <div className="flex justify-start items-baseline flex-wrap w-[730px] p-6 md:p-4 px-12 bg-lightBlack gap-5 rounded-xl md:w-full">
        <div className="flex w-full justify-between md:flex-col-reverse gap-5">
          <div className="flex items-start">
            <input
              placeholder="Descrição do registro"
              className="appearance-none bg-transparent border-b border-lightGray
               text-white text-sm font-semibold
               placeholder:text-gray placeholder:font-bold md:w-full"
            ></input>
          </div>
          <div className="flex flex-col items-end md:flex-row md:justify-start md:items-center">
            <span className="text-gray text-xs md:mr-2">Status Registro</span>
            <StatusItem status="Consolidado" />
          </div>
        </div>

        <div className="flex w-full justify-between md:flex-col gap-5">
          <div className="flex flex-col">
            <span className="text-gray text-xs">Data do registro</span>
            <input
              className="appearance-none bg-transparent border-b border-lightGray
               text-white text-sm font-semibold"
            ></input>
          </div>
          <div className="flex flex-col">
            <span className="text-gray text-xs">Tipo de registro</span>
            <div className="flex justify-center border-b border-lightGray ">
              <IconTrendingUp
                className="text-green mr-1"
                stroke={2}
                size={15}
              />
              <select className="bg-transparent appearance-none font-semibold text-sm text-center uppercase text-green">
                <option value="">Receita</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-gray text-xs">Valor Registro</span>
            <input
              className="appearance-none bg-transparent border-b border-lightGray
               text-white text-sm font-semibold"
            ></input>
          </div>
        </div>
      </div>

      <div className="flex justify-start w-[730px] p-6 md:p-4 bg-lightBlack gap-3 rounded-xl md:w-full">
        <button className="btn-primary md:w-1/2">Salvar</button>
        <button className="btn-gray  md:w-1/2">Cancelar</button>
      </div>
    </div>
  );
}
