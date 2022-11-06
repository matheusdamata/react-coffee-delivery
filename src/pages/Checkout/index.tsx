import { useContext, useEffect, useState } from 'react'

import {
  Container,
  InputBase,
  InputBaseFlex,
  InputBaseFlexMarginR,
  InputBaseMarginR,
  InputBaseMinW,
  SideLeft,
  SideLeftContainer,
  SideLeftFooter,
  SideLeftFooterButtons,
  SideLeftFooterContent,
  SideLeftFormContainer,
  SideLeftFormContent,
  SideLeftFormFlex,
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

  const [totalCart, setTotalCart] = useState(0)
  const [subTotalCart, setSubTotalCart] = useState(0)
  const deliveryPrice = 3.5

  const formatPrice = (value: number, quantity: number) => value * quantity

  const cartFormatted = carts.map((cart) => ({
    ...cart,
    subtotal: formatPrice(cart.quantity, cart.value),
  }))

  const subTotal = cartFormatted.reduce((sumTotal, product) => {
    return sumTotal + product.subtotal
  }, 0)

  const total = subTotal + deliveryPrice

  useEffect(() => {
    setSubTotalCart(() => subTotal)
    setTotalCart(() => total)
  }, [subTotal, total])
  console.log('Total: ', total)

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
            <SideLeftFormContent>
              <InputBase type="text" placeholder="CEP" />
              <input type="text" placeholder="Rua" />
              <SideLeftFormFlex>
                <InputBaseMarginR type="number" placeholder="Número" />
                <InputBaseFlex type="text" placeholder="Complemento" />
              </SideLeftFormFlex>
              <SideLeftFormFlex>
                <InputBaseMarginR type="text" placeholder="Bairro" />
                <InputBaseFlexMarginR type="text" placeholder="Cidade" />
                <InputBaseMinW type="text" placeholder="UF" />
              </SideLeftFormFlex>
            </SideLeftFormContent>
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
                {subTotalCart.toLocaleString('pt-br', {
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
              {subTotalCart > 0 ? (
                <strong>
                  R${' '}
                  {totalCart.toLocaleString('pt-br', {
                    minimumFractionDigits: 2,
                  })}
                </strong>
              ) : (
                <strong>R$ 0,00</strong>
              )}
            </SideRightFooterTotal>

            <SideRightButtonConfirmOrder disabled={carts.length === 0}>
              CONFIRMAR PEDIDO
            </SideRightButtonConfirmOrder>
          </SideRightFooter>
        </SideRightContainer>
      </SideRight>
    </Container>
  )
}
