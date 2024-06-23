import ContentArea from "@/components/ContentArea";
import MainContent from "@/components/ContentMain";
import Bar from "@/components/Bar";

export default function Home() {
  return (
    <ContentArea gap={0} className="h-screen bg-black">
      <Bar />
      <MainContent isEmpty={false} />
    </ContentArea>
  );
}
