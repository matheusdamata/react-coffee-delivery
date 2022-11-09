import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Container, ContentBase, IconContainer, Information } from './styles'

type userInfoType = {
  cep: string
  street: string
  number: string
  complement?: string
  district: string
  city: string
  uf: string
  paymentSelected: string
}

type IconsInformationType = {
  userInfoDelivery: userInfoType[]
  address?: string
  number?: number
  payment: 'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro'
}

export function IconsInformation({
  userInfoDelivery,
  address,
  number,
  payment,
}: IconsInformationType) {
  console.log(userInfoDelivery)
  return (
    <Container>
      <ContentBase>
        <IconContainer bgColor="purple">
          <MapPin size={16} />
        </IconContainer>
        <Information>
          <p>
            Entrega em{' '}
            <strong>
              {userInfoDelivery[0].street}, {userInfoDelivery[0].number}
            </strong>
          </p>
          <p>
            {userInfoDelivery[0].district} - {userInfoDelivery[0].city},{' '}
            {userInfoDelivery[0].uf}
          </p>
        </Information>
      </ContentBase>
      <ContentBase>
        <IconContainer bgColor="yellow">
          <Timer size={16} />
        </IconContainer>
        <Information>
          <p>Previsão de entrega</p>
          <strong>20 min - 30 min</strong>
        </Information>
      </ContentBase>
      <ContentBase>
        <IconContainer bgColor="yellowDark">
          <CurrencyDollar size={16} />
        </IconContainer>
        <Information>
          <p>Pagamento na entrega</p>
          <strong>{userInfoDelivery[0].paymentSelected}</strong>
        </Information>
      </ContentBase>
    </Container>
  )
}
