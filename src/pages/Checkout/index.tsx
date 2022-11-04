import { useContext, useEffect, useState } from 'react'

import {
  Container,
  SideLeft,
  SideLeftContainer,
  SideLeftFooter,
  SideLeftFooterButtons,
  SideLeftFooterContent,
  SideLeftFormContainer,
  SideLeftFormContent,
  SideLeftFormHeader,
  SideRight,
  SideRightButtonConfirmOrder,
  SideRightContainer,
  SideRightFooteDelivery,
  SideRightFooter,
  SideRightFooterTotal,
  SideRightFooterTotalItems,
  SideRightListProductsCart,
  SideRightListProductsCartEmpty,
} from './styles'

import { Context } from '../../contexts/Context'
import { RandomImages } from './components/RandomImages'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { ButtonsPayment } from './components/ButtonsPayment'
import { SelectedCoffees } from './components/SelectedCoffees'

export function Checkout() {
  const { carts } = useContext(Context)

  const [valueCart, setValueCart] = useState(0)
  // const deliveryValue = 3.5

  const formatPrice = (value: number, quantity: number) => value * quantity

  const cartFormatted = carts.map((cart) => ({
    ...cart,
    subtotal: formatPrice(cart.quantity, cart.value),
  }))

  console.log('Total: ', valueCart)

  console.log(cartFormatted)

  useEffect(() => {
    let valueT = 0
    for (const cart of cartFormatted) {
      valueT += cart.subtotal
      setValueCart(() => valueT)
    }
    console.log(valueT)
  }, [carts])

  return (
    <Container>
      <SideLeft>
        <h1>Complete seu pedido</h1>
        <SideLeftContainer>
          <SideLeftFormContainer>
            <SideLeftFormHeader>
              <MapPinLine size={22} />
              <div>
                <strong>Endereço de Entrega</strong>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </SideLeftFormHeader>
            <SideLeftFormContent></SideLeftFormContent>
          </SideLeftFormContainer>
          <SideLeftFooter>
            <SideLeftFooterContent>
              <CurrencyDollar size={22} />
              <div>
                <strong>Pagamento</strong>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </SideLeftFooterContent>
            <SideLeftFooterButtons>
              <ButtonsPayment name="credit-card" />
              <ButtonsPayment name="debit-card" />
              <ButtonsPayment name="money" />
            </SideLeftFooterButtons>
          </SideLeftFooter>
        </SideLeftContainer>
      </SideLeft>

      <SideRight>
        <h1>Cafés selecionados</h1>
        <SideRightContainer>
          {!carts.length && (
            <SideRightListProductsCartEmpty>
              <RandomImages />
              <span>O seu carrinho está vázio!</span>
            </SideRightListProductsCartEmpty>
          )}
          <SideRightListProductsCart>
            {carts.map((cart) => (
              <SelectedCoffees key={cart.id} productSelected={cart} />
            ))}
          </SideRightListProductsCart>
          <hr />
          <SideRightFooter>
            <SideRightFooterTotalItems>
              <span>Total de itens</span>
              <span>
                R${' '}
                {valueCart.toLocaleString('pt-br', {
                  minimumFractionDigits: 2,
                })}
              </span>
            </SideRightFooterTotalItems>

            <SideRightFooteDelivery>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </SideRightFooteDelivery>

            <SideRightFooterTotal>
              <strong>Total</strong>
              {valueCart > 0 ? (
                <strong>
                  R${' '}
                  {valueCart.toLocaleString('pt-br', {
                    minimumFractionDigits: 2,
                  })}
                  {/* {(valueCart + deliveryValue).toLocaleString('pt-br', {
                    minimumFractionDigits: 2,
                  })} */}
                </strong>
              ) : (
                <strong>R$ 0,00</strong>
              )}
            </SideRightFooterTotal>

            <SideRightButtonConfirmOrder>
              CONFIRMAR PEDIDO
            </SideRightButtonConfirmOrder>
          </SideRightFooter>
        </SideRightContainer>
      </SideRight>
    </Container>
  )
}
