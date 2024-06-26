interface InputRegistryProps {
  label: string;
}

export default function InputRegistry(props: InputRegistryProps) {
  const { label } = props;

  return (
    <div className="flex flex-col">
      <span className="text-gray text-xs">{label}</span>
      <input
        className="appearance-none bg-transparent border-b border-lightGray border-opacity-30
               text-white text-sm font-semibold"
      ></input>
    </div>
  );
}
