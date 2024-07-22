import handler from '@/api/dados'
import ContentArea from '../../../components/ContentArea'
import ContentEmpty from '../../../components/ContentEmpty'
import EntryItem from '../../../components/EntryItem'
import Header from '../../../components/Header'

interface MainContentProps {
  reg: any
  numreg: number
}
export function getStaticProps() {
  const resultados = handler
  return {
    props: { reg: resultados, numreg: resultados.length },
  }
}
export default async function MainContent(props: MainContentProps) {
  function renderContent(array: any[]) {
    if (Object.keys(array).length === 0) {
      return <ContentEmpty />
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
        )
      })
    }
  }
  const reg = props.numreg === undefined ? 0 : props.numreg

  return (
    <ContentArea
      col
      center
      className="bg-black w-full h-screen p-5 sm:mt-[75px] sm:justify-start"
    >
      <Header registros={reg} />

      <div className="flex flex-col gap-2 overflow-auto mt-5 sm:h-screen">
        {renderContent(props.reg)}
      </div>
    </ContentArea>
  )
}
