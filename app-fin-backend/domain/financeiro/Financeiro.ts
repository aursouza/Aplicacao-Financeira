import Data from "../shared/Data";
import Descricao from "../shared/Descricao";
import Valor from "../shared/Valor";
import Tipo from "../shared/Tipo";
import Status from "../shared/Status";
import { v4 as uuid } from "uuid";

export interface FinanceiroProps {
  id?: string;
  tipo: string;
  valor: string | number;
  status: boolean;
  data: string | Date;
  descricao: string;
}

export default class Financeiro {
  readonly id: string;
  tipo: Tipo;
  valor: Valor;
  status: Status;
  data: Data;
  descricao: Descricao;

  constructor(props: FinanceiroProps) {
    this.id = props.id ?? uuid();
    this.tipo = new Tipo(props.tipo);
    this.valor = new Valor(props.valor);
    this.status = new Status(props.status);
    this.data = new Data(props.data);
    this.descricao = new Descricao(props.descricao);
  }
}
