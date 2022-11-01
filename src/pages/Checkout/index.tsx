import { useContext } from 'react'

import {
  Container,
  SideLeft,
  SideLeftContainer,
  SideLeftFooter,
  SideLeftFooterButtons,
  SideLeftFooterContent,
  SideLeftFormContainer,
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
import { RandomImages } from './RandomImages'
import { CurrencyDollar } from 'phosphor-react'
import { ButtonsPayment } from './ButtonsPayment'

export function Checkout() {
  const { carts } = useContext(Context)

  return (
    <Container>
      <SideLeft>
        <h1>Complete seu pedido</h1>
        <SideLeftContainer>
          <SideLeftFormContainer>A</SideLeftFormContainer>
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
              <ButtonsPayment />
              <ButtonsPayment />
              <ButtonsPayment />
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
          <SideRightListProductsCart></SideRightListProductsCart>
          <hr />
          <SideRightFooter>
            <SideRightFooterTotalItems>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </SideRightFooterTotalItems>

            <SideRightFooteDelivery>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </SideRightFooteDelivery>

            <SideRightFooterTotal>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
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
