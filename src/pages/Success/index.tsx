import { Container, SideLeft, SideLeftContent, SideRight } from './styles'

import DeliverySuccessImage from '../../assets/delivery-success.svg'
import { IconsInformation } from './components/IconsInformation'

export function Successs() {
  return (
    <Container>
      <SideLeft>
        <h1>Uhu! Pedido confirmado</h1>
        <strong>Agora é só aguardar que logo o café chegará até você</strong>
        <SideLeftContent>
          <IconsInformation
            address="Rua João Daniel Martinelli"
            number={107}
            payment="Cartão de Crédito"
          />
        </SideLeftContent>
      </SideLeft>
      <SideRight>
        <img src={DeliverySuccessImage} alt="" />
      </SideRight>
    </Container>
  )
}
