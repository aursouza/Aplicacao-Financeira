import Data from '../shared/Data'
import Descricao from '../shared/Descricao'
import Valor from '../shared/Valor'
import Tipo from '../shared/Tipo'
import Status from '../shared/Status'

export type FinanceiroProps = {
  id?: string
  tipo: Tipo
  valor: Valor
  status: Status
  data: Data
  descricao: Descricao
}

export type FinanceirocreateProps = {
  id?: string
  tipo: string
  valor: number
  status: string
  data: string | Date
  descricao: string
}

export default class Financeiro {
  private constructor(private props: FinanceiroProps) {}

  public static create(props: FinanceirocreateProps) {
    return new Financeiro({
      id: props.id ?? crypto.randomUUID().toString(),
      tipo: new Tipo(props.tipo),
      valor: new Valor(props.valor),
      status: new Status(props.status),
      data: new Data(props.data),
      descricao: new Descricao(props.descricao),
    })
  }

  public static with(props: FinanceirocreateProps) {
    return Financeiro.create(props)
  }

  public get id() {
    return this.props.id
  }

  public get tipo() {
    return this.props.tipo
  }

  public get valor() {
    return this.props.valor
  }
  public get status() {
    return this.props.status
  }
  public get data() {
    return this.props.data
  }

  public get descricao() {
    return this.props.descricao
  }
}
