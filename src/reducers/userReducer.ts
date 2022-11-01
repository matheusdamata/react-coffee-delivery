import produce from 'immer'

export type UserProps = {
  id: number
  name: string
  value: number
  quantity: number
}

export type UserType = {
  carts: UserProps[]
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
    default:
      return state
  }
}
