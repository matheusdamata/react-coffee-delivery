import { useState } from 'react'

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import { 
  HomeContainer, 
  HomeSectionBanner, 
  HomeSectionProducts,
  InformationalIconsBanner, 
  InformationalIconsBannerContainer,  
  SideLeft, 
  SideRight } from './styles'

import CoffeDeliveryImage from '../../assets/banner-coffe-delivery.svg'

import { InformationalIconsType, AllInformationalIcons } from './components/InformationalIcons'
import { Products } from './components/Products'
import { BannerInformation } from './components/BannerInformation'


export function Home() {
  const [informationalIcons, setInformationalIcons] = useState<InformationalIconsType[]>([])

  return (
    <HomeContainer>
      <HomeSectionBanner>
        <SideLeft>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
          
          <InformationalIconsBanner>
            {AllInformationalIcons.map(icon => (
              <InformationalIconsBannerContainer>
                <BannerInformation 
                  key={icon.nameIcon} 
                  color={icon.color} 
                  nameIcon={icon.nameIcon}
                  description={icon.text}
                />
              </InformationalIconsBannerContainer>
            ))}
          </InformationalIconsBanner>
        </SideLeft>

        <SideRight>
          <img src={CoffeDeliveryImage} alt="Imagem Coffe Delivery" />
        </SideRight>
      </HomeSectionBanner>
      <HomeSectionProducts>
        <Products />
      </HomeSectionProducts>
    </HomeContainer>
  )
}