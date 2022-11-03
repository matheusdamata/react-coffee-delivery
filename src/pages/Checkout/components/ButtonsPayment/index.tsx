import { Button } from './styles'
import { Bank, CreditCard, Money } from 'phosphor-react'

type ButtonsPaymentProps = {
  name: 'credit-card' | 'debit-card' | 'money'
}

export function ButtonsPayment({ name }: ButtonsPaymentProps) {
  return (
    <>
      {name === 'credit-card' && (
        <Button>
          <CreditCard size={16} /> CARTÃO DE CRÉDITO
        </Button>
      )}
      {name === 'debit-card' && (
        <Button>
          <Bank size={16} /> CARTÃO DE DÉBITO
        </Button>
      )}
      {name === 'money' && (
        <Button>
          <Money size={16} /> DINHEIRO
        </Button>
      )}
    </>
  )
}
