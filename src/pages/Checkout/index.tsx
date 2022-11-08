import { useContext, useEffect, useState } from 'react'

import {
  Container,
  SideLeft,
  SideLeftContainer,
  SideLeftFooter,
  SideLeftFooterButtons,
  SideLeftFooterContent,
  SideLeftFormContainer,
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
import { FormCheckout } from './components/FormCheckout'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'

const newSalesOrderFormValidationSchema = zod.object({
  cep: zod.string().min(8).max(8),
  street: zod.string().min(1, 'O campo "Rua" é necessário!'),
  number: zod.string().min(1, 'O campo "Número" é necessário!'),
  complement: zod.string(),
  district: zod.string().min(1, 'O campo "Bairro" é necessário!'),
  city: zod.string().min(1, 'O campo "Cidade" é necessário!'),
})

type NewSalesOrderFormData = zod.infer<typeof newSalesOrderFormValidationSchema>

export function Checkout() {
  const { carts } = useContext(Context)

  const cartNumbers = carts.length
  const isSubmitSaleForm = !cartNumbers

  const [selectedPayment, setSelectedPayment] = useState('')

  const newSalesOrderForm = useForm<NewSalesOrderFormData>({
    resolver: zodResolver(newSalesOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
    },
  })

  const { handleSubmit, reset } = newSalesOrderForm

  function handleNewSaleSubmit(data: NewSalesOrderFormData) {
    console.log(data)
    reset()
  }

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

  function handleSelectedPayment(option: string) {
    setSelectedPayment(() => option)
    console.log('Option selected: ' + selectedPayment)
  }

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
            <form
              id="formNewSales"
              onSubmit={handleSubmit(handleNewSaleSubmit)}
              action=""
            >
              <FormProvider {...newSalesOrderForm}>
                <FormCheckout />
              </FormProvider>
            </form>
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
              <ButtonsPayment
                name="credit-card"
                onClick={() => handleSelectedPayment('credit')}
              />
              <ButtonsPayment
                name="debit-card"
                onClick={() => handleSelectedPayment('debit')}
              />
              <ButtonsPayment
                name="money"
                onClick={() => handleSelectedPayment('money')}
              />
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

            <SideRightButtonConfirmOrder
              form="formNewSales"
              disabled={isSubmitSaleForm}
              type="submit"
            >
              CONFIRMAR PEDIDO
            </SideRightButtonConfirmOrder>
          </SideRightFooter>
        </SideRightContainer>
      </SideRight>
    </Container>
  )
}
