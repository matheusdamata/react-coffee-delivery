import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { Context } from '../../../../contexts/Context'
import {
  ButtonTrash,
  ProductSelectedAddToCart,
  ProductSelectedButtons,
  ProductSelectedContainer,
  ProductSelectedContent,
} from './styles'

type SelectedCoffeesType = {
  id: number
  imageUrl: string
  name: string
  value: number
  quantity: number
}

type SelectedCoffeesProps = {
  productSelected: SelectedCoffeesType
}

export function SelectedCoffees({ productSelected }: SelectedCoffeesProps) {
  const { dispatch } = useContext(Context)

  function incrementProduct(id: number) {
    dispatch({
      type: 'INCREMENT_PRODUCT',
      payload: {
        id,
        increment: 1,
      },
    })
  }

  function decrementProduct(id: number) {
    productSelected.quantity <= 1
      ? removeItemCart(id)
      : dispatch({
          type: 'DECREMENT_PRODUCT',
          payload: {
            id,
            increment: -1,
          },
        })
  }

  function removeItemCart(id: number) {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id,
    })
  }

  return (
    <ProductSelectedContainer>
      <img src={productSelected.imageUrl} alt="Imagem do café" />
      <ProductSelectedContent>
        <strong>{productSelected.name}</strong>
        <ProductSelectedButtons>
          <ProductSelectedAddToCart>
            <button onClick={() => decrementProduct(productSelected.id)}>
              <Minus size={14} weight="bold" />
            </button>
            {productSelected.quantity}
            <button onClick={() => incrementProduct(productSelected.id)}>
              <Plus size={14} weight="bold" />
            </button>
          </ProductSelectedAddToCart>
          <ButtonTrash onClick={() => removeItemCart(productSelected.id)}>
            <Trash size={16} />
            REMOVER
          </ButtonTrash>
        </ProductSelectedButtons>
      </ProductSelectedContent>
      <strong>
        R${' '}
        {(productSelected.value * productSelected.quantity).toLocaleString(
          'pt-br',
          {
            minimumFractionDigits: 2,
          },
        )}
      </strong>
    </ProductSelectedContainer>
  )
}
