"use client";

import ContentArea from "@/components/ContentArea";
import MainContent from "@/components/ContentMain";
import Bar from "@/components/Bar";
import SizeWindow from "@/hooks/useSizeWindow";

export default function Home() {
  const size = SizeWindow();

  function isMobile() {
    if (size === "xsm") {
      return true;
    }
  }

  return (
    <ContentArea gap={0} className="h-screen bg-black">
      <Bar top={isMobile()} />
      <MainContent />
    </ContentArea>
  );
}
