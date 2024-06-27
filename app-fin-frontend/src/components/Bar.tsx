import Logo from "@/components/Logo";
import Avatar from "./Avatar";

export default function Bar() {
  return (
    <>
      <div className="flex flex-col justify-between w-[100px] bg-lightBlack rounded-r-[25px] md:absolute md:w-full md:rounded-none md:h-[50px]">
        <Logo />
        <div className="flex justify-center items-center w-[100px] h-[100px] border-t-2 border-gray md:absolute md:right-0 sm:top-0 md:border-l-2 md:border-t-0 md:w-[50px] md:h-[50px]">
          <Avatar />
        </div>
      </div>
    </>
  );
}
