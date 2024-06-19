import Logo from "@/components/Logo";
import Avatar from "./Avatar";

interface BarProps {
  top?: boolean;
}

export default function Bar(props: BarProps) {
  return (
    <>
      {props.top ? (
        <div className="absolute w-full bg-lightBlack">
          <Logo />
          <div className="absolute top-8 right-8">
            <Avatar />
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-between w-[100px] bg-lightBlack rounded-r-[25px]">
          <Logo />
          <div className="flex justify-center items-center w-[100px] h-[100px] border-t-2 border-gray">
            <Avatar />
          </div>
        </div>
      )}
    </>
  );
}
