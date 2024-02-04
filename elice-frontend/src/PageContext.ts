import { Dispatch, SetStateAction, createContext } from 'react'

export interface PageContextType {
  page: number
  setPage: Dispatch<SetStateAction<number>>
}

export const PageContext = createContext({
  page: 0,
  setPage: (page: number) => {},
})
