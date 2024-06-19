import Logo from "@/components/Logo";

interface BarProps {
  top?: boolean;
}

export default function Bar(props: BarProps) {
  return (
    <>
      {props.top ? (
        <div className="absolute w-full bg-lightBlack">
          <Logo />
          <div className="absolute top-0 right-0">top</div>
        </div>
      ) : (
        <div className="flex flex-col justify-between w-[100px] bg-lightBlack rounded-r-[25px]">
          <Logo />
          <div className="absolute bottom-0 left-0">bottom</div>
        </div>
      )}
    </>
  );
}
