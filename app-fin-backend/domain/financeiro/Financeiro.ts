import Data from '../shared/Data'
import Descricao from '../shared/Descricao'
import Valor from '../shared/Valor'
import Tipo from '../shared/Tipo'
import Status from '../shared/Status'

export type FinanceiroProps = {
  id: string
  tipo: Tipo
  valor: Valor
  status: Status
  data: Data
  descricao: Descricao
}

export default class Financeiro {
  private constructor(private props: FinanceiroProps) {}

  public static create(
    id: string,
    tipo: string,
    valor: number,
    status: boolean,
    data: Date,
    descricao: string
  ) {
    return new Financeiro({
      id: crypto.randomUUID().toString(),
      tipo: new Tipo(tipo),
      valor: new Valor(valor),
      status: new Status(status),
      data: new Data(data),
      descricao: new Descricao(descricao),
    })
  }

  public static with(props: FinanceiroProps) {
    return new Financeiro(props)
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
