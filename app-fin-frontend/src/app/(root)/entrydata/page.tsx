import ContentArea from '@/components/ContentArea'
import EntryViewMode from '@/components/EntryViewMode'
import { HandlerCreate, HandlerUpdate, HandlerDelete } from '@/api/dados'

const Entrydata = () => {
  const novadata = new Date()
  return (
    <ContentArea
      col
      center
      className="bg-black w-full h-screen p-5 sm:mt-[75px] sm:justify-start"
    >
      <EntryViewMode
        idEntry=""
        dataEntry={novadata.toISOString()}
        descriptionEntry=""
        typeEntry="despesa"
        valueEntry="0.00"
        statusEntry="Consolidado"
        tipovisualização="1"
      />
    </ContentArea>
  )
}

export default Entrydata
