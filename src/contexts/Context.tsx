import React, { createContext, ReactNode, useReducer } from 'react'

import { UserProps, userReducer } from '../reducers/userReducer'

type ContextType = {
  carts: UserProps[]
  purchased: UserProps[]
  dispatch: React.Dispatch<any>
}

interface ContextProviderType {
  children: ReactNode
}

export const Context = createContext({} as ContextType)

export const ContextProvider = ({ children }: ContextProviderType) => {
  const [userState, dispatch] = useReducer(userReducer, {
    carts: [],
    purchased: [],
  })

  const { carts, purchased } = userState

  return (
    <Context.Provider value={{ carts, purchased, dispatch }}>
      {children}
    </Context.Provider>
  )
}
