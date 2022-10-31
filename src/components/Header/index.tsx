import { useContext } from 'react'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import LogoCoffeDelivery from '../../assets/logo.svg'

import { Context } from '../../contexts/Context'

import { HeaderButton, HeaderContainer, HeaderOptions, LocationUser } from './styles'

export function Header() {
  const { carts } = useContext(Context)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={LogoCoffeDelivery} alt="Logo Coffe Delivery" />
      </NavLink>

      <HeaderOptions>
        <LocationUser>
          <MapPin size={24} weight="fill" />
          Goiânia, GO
        </LocationUser>
        <HeaderButton>
          <ShoppingCart size={24} weight="fill" />
          <span>{carts.length}</span>
        </HeaderButton>
      </HeaderOptions>
    </HeaderContainer>
  )
}