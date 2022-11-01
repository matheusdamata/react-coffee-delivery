import React, { createContext, ReactNode, useReducer } from 'react'

import { UserProps, userReducer } from '../reducers/userReducer'

type ContextType = {
  carts: UserProps[]
  dispatch: React.Dispatch<any>
}

interface ContextProviderType {
  children: ReactNode
}

export const Context = createContext({} as ContextType)

export const ContextProvider = ({ children }: ContextProviderType) => {
  const [cartsState, dispatch] = useReducer(userReducer, {
    carts: [],
  })

  const { carts } = cartsState

  return (
    <Context.Provider value={{ carts, dispatch }}>{children}</Context.Provider>
  )
}
