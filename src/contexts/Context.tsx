import React, { createContext, ReactNode, useReducer } from 'react'

import { CartProps, UserProps, userReducer } from '../reducers/userReducer'

type ContextType = {
  carts: CartProps[]
  purchased: {
    userInfo: UserProps[]
    cart: CartProps[]
  }
  dispatch: React.Dispatch<any>
}

interface ContextProviderType {
  children: ReactNode
}

export const Context = createContext({} as ContextType)

export const ContextProvider = ({ children }: ContextProviderType) => {
  const [userState, dispatch] = useReducer(userReducer, {
    carts: [],
    purchased: {
      userInfo: [],
      cart: [],
    },
  })

  const { carts, purchased } = userState

  return (
    <Context.Provider value={{ carts, purchased, dispatch }}>
      {children}
    </Context.Provider>
  )
}
