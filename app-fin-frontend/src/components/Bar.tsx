import Logo from "@/components/Logo";
import Avatar from "./Avatar";

export default function Bar() {
  return (
    <>
      <div className="flex flex-col justify-between w-[100px] bg-lightBlack rounded-r-[25px] sm:absolute sm:w-full sm:rounded-none">
        <Logo />
        <div className="flex justify-center items-center w-[100px] h-[100px] border-t-2 border-gray sm:absolute sm:right-0 sm:top-0 sm:border-l-2 sm:border-t-0">
          <Avatar />
        </div>
      </div>
    </>
  );
}
