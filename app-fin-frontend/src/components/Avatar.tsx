import Image from "next/image";

import image from "../../public/image/avatar.png";

interface AvatarProps {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
}

export default function Avatar(props: AvatarProps) {
  return (
    <div>
      <Image src={image} width={40} height={40} alt="Image Avatar" priority />
    </div>
  );
}
