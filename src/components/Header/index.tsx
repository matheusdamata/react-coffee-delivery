import { ShoppingCart, MapPin } from 'phosphor-react'
import LogoCoffeDelivery from '../../assets/logo.svg'
import { HeaderButton, HeaderContainer, HeaderOptions, LocationUser } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffeDelivery} alt="Logo Coffe Delivery" />

      <HeaderOptions>
        <LocationUser>
          <MapPin size={24} weight="fill" />
          Goiânia, GO
        </LocationUser>
        <HeaderButton>
          <ShoppingCart size={24} weight="fill" />
        </HeaderButton>
      </HeaderOptions>
    </HeaderContainer>
  )
}