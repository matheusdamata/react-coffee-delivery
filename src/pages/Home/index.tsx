import { useState } from 'react'

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import { 
  HomeContainer, 
  HomeSectionBanner, 
  HomeSectionProducts, 
  IconContent, 
  InformationalIconsBanner, 
  InformationalIconsBannerContainer, 
  InformationalText, 
  SideLeft, 
  SideRight } from './styles'

import CoffeDeliveryImage from '../../assets/banner-coffe-delivery.svg'

import { InformationalIconsType, AllInformationalIcons } from './components/InformationalIcons'


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
                <IconContent>
                  {icon.nameIcon === 'ShoppingCart' && <ShoppingCart size={15} weight="fill" />}
                  {icon.nameIcon === 'Package' && <Package size={15} weight="fill" />}
                  {icon.nameIcon === 'Timer' && <Timer size={15} weight="fill" />}
                  {icon.nameIcon === 'Coffee' && <Coffee size={15} weight="fill" />}
                </IconContent>

                <InformationalText>{icon.text}</InformationalText>
              </InformationalIconsBannerContainer>
            ))}

            {/* <div>Compra simples e segura</div>
            <div>Entrega rápida e rastreada</div>
            <div>Embalagem mantém o café intacto</div>
            <div>O café chega fresquinho até você</div> */}
          </InformationalIconsBanner>
        </SideLeft>
        <SideRight>
          <img src={CoffeDeliveryImage} alt="Imagem Coffe Delivery" />
        </SideRight>
      </HomeSectionBanner>
      <HomeSectionProducts>

      </HomeSectionProducts>
    </HomeContainer>
  )
}