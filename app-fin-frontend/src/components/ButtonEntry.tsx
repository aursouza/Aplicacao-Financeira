import { IconCirclePlusFilled } from "@tabler/icons-react";

export default function ButtonEntry() {
  return (
    <button className="flex justify-center items-center rounded-full w-[150px] h-12 bg-primary sm:w-[50px] sm:ml-10">
      <IconCirclePlusFilled size={32} />
      <span className="ml-1 font-light sm:hidden sm:ml-0">Novo registro</span>
    </button>
  );
}
