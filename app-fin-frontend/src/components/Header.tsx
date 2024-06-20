import { IconCirclePlusFilled } from "@tabler/icons-react";

export default function Header() {
  return (
    <div className="flex justify-between items-start sm:flex-col md:items-center">
      <div className="flex flex-col md:items-center">
        <h1 className="text-4xl md:text-3xl">Minhas Finanças</h1>
        <p>Você possui 4 registro(s)</p>
      </div>

      <div className="flex ml-10 md:ml-0 md:mt-5">
        <select id="" className="bg-transparent mr-10 md:mr-1 h-[48px]">
          <option value="">Filtrar por Status</option>
          <option value="Consolidado">Consolidado</option>
          <option value="Pendente">Pendente</option>
          <option value="Cancelado">Cancelado</option>
        </select>
        <button className="flex justify-center items-center rounded-full w-[150px] h-12 bg-primary sm:w-[50px] sm:ml-10">
          <IconCirclePlusFilled size={32} />
          <span className="ml-1 font-light sm:hidden sm:ml-0">
            Novo registro
          </span>
        </button>
      </div>
    </div>
  );
}
