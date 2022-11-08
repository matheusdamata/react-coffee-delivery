export type PurchasedProps = {
  id: number
  imageUrl: string
  name: string
  value: number
  quantity: number
}

export type PurchasedType = {
  purchased: PurchasedProps[]
}

export const userPurchasedReducer = (state: PurchasedType, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      console.log('Bla bla bla')
      break
    }
    default:
      return state
  }
}
