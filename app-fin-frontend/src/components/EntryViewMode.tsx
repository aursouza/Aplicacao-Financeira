import StatusItem from "./StatusItem";

export default function EntryViewMode() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-start items-baseline w-[730px] p-6 md:p-4 px-12 bg-lightBlack gap-3 rounded-xl md:w-full md:justify-between">
        Modo <StatusItem status="Edição" />
      </div>

      <div className="flex justify-start items-baseline flex-wrap w-[730px] p-6 md:p-4 px-12 bg-lightBlack gap-5 rounded-xl md:w-full">
        <div className="flex w-full justify-between md:flex-col gap-5">
          <div className="flex flex-col">
            <span>Descrição do registro</span>
            <input></input>
          </div>
          <div className="flex flex-col">
            <span>Status</span>
            <input></input>
          </div>
        </div>

        <div className="flex w-full justify-between md:flex-col gap-5">
          <div className="flex flex-col">
            <span>Data do registro</span>
            <input></input>
          </div>
          <div className="flex flex-col">
            <span>Tipo de registro</span>
            <input></input>
          </div>
          <div className="flex flex-col">
            <span>Valor Registro</span>
            <input></input>
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
