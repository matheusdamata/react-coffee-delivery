import produce from 'immer'

export type UserProps = {
  cep: string
  street: string
  number: string
  complement?: string
  district: string
  city: string
  uf: string
  paymentSelected: string
}

export type CartProps = {
  id: number
  imageUrl: string
  name: string
  value: number
  quantity: number
}

export type UserType = {
  carts: CartProps[]
  purchased: {
    userInfo: UserProps[]
    cart: CartProps[]
  }
}

export const userReducer = (state: UserType, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const currentProductIndex = state.carts.findIndex((cart) => {
        return cart.id === action.payload.id
      })

      if (currentProductIndex < 0) {
        return produce(state, (draft) => {
          draft.carts.push(action.payload)
        })
      }
      return produce(state, (draft) => {
        draft.carts[currentProductIndex].quantity =
          draft.carts[currentProductIndex].quantity + action.payload.quantity
      })
    }
    case 'INCREMENT_PRODUCT': {
      const currentProductIndex = state.carts.findIndex((cart) => {
        return cart.id === action.payload.id
      })

      return produce(state, (draft) => {
        draft.carts[currentProductIndex].quantity += action.payload.increment
      })
    }
    case 'DECREMENT_PRODUCT': {
      const currentProductIndex = state.carts.findIndex((cart) => {
        return cart.id === action.payload.id
      })

      return produce(state, (draft) => {
        draft.carts[currentProductIndex].quantity += action.payload.increment
      })
    }
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        carts: state.carts.filter((product) => product.id !== action.payload),
      }
    }
    case 'PURCHASED_SUCCESS': {
      return produce(state, (draft) => {
        draft.purchased.userInfo.push(action.payload.userInfo)
        draft.purchased.cart.push(action.payload.cart)
        draft.carts = []
      })
    }
    default:
      return state
  }
}
