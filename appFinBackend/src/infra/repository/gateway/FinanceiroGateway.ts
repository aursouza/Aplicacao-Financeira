import Financeiro from '@/domain/financeiro/Financeiro'

export interface FinanceiroGateway {
  save(financeiro: Financeiro): Promise<void>
  list(): Promise<Financeiro[]>
  update(financeiro: Financeiro): Promise<Financeiro>
  delete(id: string): Promise<void>
}
