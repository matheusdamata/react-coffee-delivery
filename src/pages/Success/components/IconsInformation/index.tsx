import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Container, ContentBase, IconContainer, Information } from './styles'

type IconsInformationType = {
  address: string
  number: number
  payment: 'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro'
}

export function IconsInformation({
  address,
  number,
  payment,
}: IconsInformationType) {
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
              {address}, {number}
            </strong>
          </p>
          <p>Farrapos - Porto Alegre, RS</p>
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
          <strong>{payment}</strong>
        </Information>
      </ContentBase>
    </Container>
  )
}
