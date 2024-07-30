import Image from 'next/image'
import img from '../../public/image/empty.png'
import ContentArea from './ContentArea'

export default function ContentEmpty() {
  return (
    <ContentArea col center className="mt-5">
      <Image src={img} width={278} height={300} alt="Empty" priority />
      <h2 className="text-3xl text-lightGray font-semibold">
        Nada para Mostrar
      </h2>
      <p className="font-normal text-xl text-gray text-center leading-6">
        Clique no botão <strong>Novo Registro</strong>
        <br />
        para adicionar receitas ou despesas
      </p>
    </ContentArea>
  )
}
