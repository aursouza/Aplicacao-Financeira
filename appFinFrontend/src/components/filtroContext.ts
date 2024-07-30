import { createContext } from 'react'
import { Filtro } from './ContentInitial'

export let FilterContext = createContext<Filtro | undefined>(undefined)
