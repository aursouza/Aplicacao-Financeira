import Image from "next/image";

import img from "../../public/image/avatar.png";

interface AvatarProps {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
}

export default function Avatar(props: AvatarProps) {
  return (
    <div>
      <Image src={img} width={40} height={40} alt="Image Avatar" priority />
    </div>
  );
}
