import { IconChevronDown } from "@tabler/icons-react";

const status: string[] = ["Consolidado", "Pendente", "Cancelado"];

export default function Select() {
  return (
    <div className="flex justify-center items-center mr-10 md:mr-1 h-[48px]">
      <select className="bg-transparent appearance-none text-center">
        <option value="">Filtrar por Status</option>
        {status.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <IconChevronDown className="text-primary" stroke={3} />
    </div>
  );
}
