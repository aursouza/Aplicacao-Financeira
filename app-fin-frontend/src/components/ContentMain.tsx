import ContentArea from "./ContentArea";
import Header from "./Header";

export default function MainContent() {
  return (
    <ContentArea center className="bg-black w-full h-screen">
      <Header />
    </ContentArea>
  );
}
