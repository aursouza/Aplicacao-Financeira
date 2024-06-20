import ContentArea from "./ContentArea";
import ContentEmpty from "./ContentEmpty";
import Header from "./Header";

export default function MainContent() {
  return (
    <ContentArea col center className="bg-black w-full h-screen">
      <Header />
      <ContentEmpty />
    </ContentArea>
  );
}
