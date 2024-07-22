import Bar from '@/components/Bar'
import ContentArea from '@/components/ContentArea'
import ContentEmpty from '@/components/ContentEmpty'
import Header from '@/components/Header'

const EmptyData = () => {
  return (
    <ContentArea gap={0} className="h-screen bg-black">
      <Bar />

      <ContentArea
        col
        center
        className="bg-black w-full h-screen p-5 sm:mt-[75px] sm:justify-start"
      >
        <Header registros="0" />
        <ContentEmpty />
      </ContentArea>
    </ContentArea>
  )
}

export default EmptyData
