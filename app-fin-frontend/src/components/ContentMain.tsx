import ContentArea from "./ContentArea";
import ContentEmpty from "./ContentEmpty";
import EntryItem from "./EntryItem";
import Header from "./Header";

import { items } from "../utils/mockData";
import EntryViewMode from "./EntryViewMode";

interface MainContentProps {}

export default function MainContent(props: MainContentProps) {
  function renderContent(array: any[]) {
    if (Object.keys(array).length === 0) {
      return <ContentEmpty />;
    } else {
      return array.map((item) => {
        return (
          <EntryItem
            key={item.id}
            idEntry={item.id}
            dataEntry={item.data}
            valueEntry={item.value}
            statusEntry={item.status}
            typeEntry={item.type}
            descriptionEntry={item.description}
          />
        );
      });
    }
  }

  return (
    <ContentArea
      col
      center
      className="bg-black w-full h-screen p-5 sm:mt-[75px] sm:justify-start"
    >
      {/* <Header /> */}

      <div className="flex flex-col gap-2 overflow-auto mt-5 sm:h-screen">
        {/* {renderContent(items)} */}

        <EntryViewMode />
      </div>
    </ContentArea>
  );
}
