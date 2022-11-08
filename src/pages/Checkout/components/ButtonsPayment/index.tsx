import { Button } from './styles'
import { Bank, CreditCard, Money } from 'phosphor-react'

type ButtonsPaymentProps = {
  name: 'credit-card' | 'debit-card' | 'money'
  onClick: () => void
}

export function ButtonsPayment({ name, onClick }: ButtonsPaymentProps) {
  function handleClick() {
    onClick()
  }

  return (
    <>
      {name === 'credit-card' && (
        <Button id="buttonPayment" onClick={handleClick}>
          <CreditCard size={16} /> CARTÃO DE CRÉDITO
        </Button>
      )}
      {name === 'debit-card' && (
        <Button id="buttonPayment" onClick={handleClick}>
          <Bank size={16} /> CARTÃO DE DÉBITO
        </Button>
      )}
      {name === 'money' && (
        <Button id="buttonPayment" onClick={handleClick}>
          <Money size={16} /> DINHEIRO
        </Button>
      )}
    </>
  )
}
