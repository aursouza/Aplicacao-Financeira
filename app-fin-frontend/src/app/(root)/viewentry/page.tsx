'use client'
import ContentArea from '@/components/ContentArea'
import EntryViewMode from '@/components/EntryViewMode'

const mode: string[] = ['Visualização', 'Edição']
const statusvm: string[] = ['Consolidado', 'Pendente', 'Cancelado']
const type: string[] = ['despesa', 'receita']

export default function ViewEntry(props: any) {
  const searchParams = props.searchParams

  return (
    <ContentArea
      col
      center
      className="bg-black w-full h-screen p-5 sm:mt-[75px] sm:justify-start"
    >
      <EntryViewMode
        idEntry={searchParams.idEntry}
        dataEntry={searchParams.dataEntry}
        descriptionEntry={searchParams.descriptionEntry}
        typeEntry={searchParams.typeEntry}
        valueEntry={searchParams.valueEntry}
        statusEntry={searchParams.statusEntry}
        tipovisualização="0"
      />
    </ContentArea>
  )
}
