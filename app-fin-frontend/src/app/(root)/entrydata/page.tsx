import Bar from '@/components/Bar'
import ContentArea from '@/components/ContentArea'
import EntryViewMode from '@/components/EntryViewMode'
import Header from '@/components/Header'
import StatusItem from '@/components/StatusItem'

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
        <EntryViewMode />
      </ContentArea>
    </ContentArea>
  )
}

export default viewdata
