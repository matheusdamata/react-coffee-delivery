import { Button } from './styles'
import { CreditCard } from 'phosphor-react'

export function ButtonsPayment() {
  return (
    <Button>
      <CreditCard size={16} />
      CARTÃO DE CRÉDITO
    </Button>
  )
}
