import { Container, SideLeft, SideLeftContent, SideRight } from './styles'

import DeliverySuccessImage from '../../assets/delivery-success.svg'
import { IconsInformation } from './components/IconsInformation'
import { Context } from '../../contexts/Context'
import { useContext } from 'react'

import { Navigate } from 'react-router-dom'

export function Successs() {
  const { purchased } = useContext(Context)
  const { userInfo } = purchased

  return (
    <>
      {userInfo.length ? (
        <Container>
          <SideLeft>
            <h1>Uhu! Pedido confirmado</h1>
            <strong>
              Agora é só aguardar que logo o café chegará até você
            </strong>
            <SideLeftContent>
              <IconsInformation
                userInfoDelivery={userInfo}
                address="Rua C-55"
                number={107}
                payment="Cartão de Crédito"
              />
            </SideLeftContent>
          </SideLeft>
          <SideRight>
            <img src={DeliverySuccessImage} alt="" />
          </SideRight>
        </Container>
      ) : (
        <Navigate to="/" />
      )}
    </>
  )
}
