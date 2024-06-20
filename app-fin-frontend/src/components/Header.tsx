import ButtonEntry from "./ButtonEntry";
import Select from "./Select";

export default function Header() {
  return (
    <div className="flex justify-between items-start sm:flex-col md:items-center">
      <div className="flex flex-col md:items-center">
        <h1 className="text-4xl lg:text-3xl">Minhas Finanças</h1>
        <p>Você possui 4 registro(s)</p>
      </div>
      <div className="flex ml-10 md:ml-0 md:mt-5 ">
        <Select />
        <ButtonEntry />
      </div>
    </div>
  );
}
