import ContentArea from "./ContentArea";
import ContentEmpty from "./ContentEmpty";
import EntryItem from "./EntryItem";
import Header from "./Header";

import { entradas } from "../utils/mockData";

interface MainContentProps {
  isEmpty: boolean;
}

export default function MainContent(props: MainContentProps) {
  const { isEmpty } = props;

  const items = entradas;

  return (
    <ContentArea
      col
      center
      className="bg-black w-full h-screen p-5 sm:mt-[75px] sm:justify-start"
    >
      <Header />

      <div className="flex flex-col gap-2 overflow-auto mt-5 sm:h-screen">
        {isEmpty && <ContentEmpty />}

        {entradas.map((item) => {
          return (
            <EntryItem
              key={item.id}
              valueEntry={item.value}
              statusEntry={item.status}
              typeEntry={item.type}
              descriptionEntry={item.description}
            />
          );
        })}
      </div>
    </ContentArea>
  );
}
