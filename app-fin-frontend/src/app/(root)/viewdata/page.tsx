import Bar from '@/components/Bar'
import ContentArea from '@/components/ContentArea'
import EntryItem from '@/components/EntryItem'
import Header from '@/components/Header'

import { items } from '@/utils/mockData'

const viewdata = () => {
  return (
    <ContentArea gap={0} className="h-screen bg-black">
      <Bar />
      <ContentArea
        col
        center
        className="bg-black w-full h-screen p-5 sm:mt-[75px] sm:justify-start"
      >
        <Header />
        <EntryItem
          idEntry={items[0].id}
          dataEntry={items[0].data}
          descriptionEntry={items[0].description}
          typeEntry={items[0].type}
          valueEntry={items[0].value}
          statusEntry={items[0].status}
        />
      </ContentArea>
    </ContentArea>
  )
}

export default viewdata
