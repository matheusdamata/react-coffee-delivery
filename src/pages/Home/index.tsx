import { useEffect, useState } from 'react'

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import { 
  HomeContainer, 
  HomeSectionBanner, 
  HomeSectionProducts,
  InformationalIconsBanner, 
  InformationalIconsBannerContainer,  
  ProductsListContainer,  
  SideLeft, 
  SideRight } from './styles'

import CoffeDeliveryImage from '../../assets/banner-coffe-delivery.svg'

import { AllInformationalIcons } from './components/InformationalIcons'
import { Product } from './components/Product'
import { BannerInformation } from './components/BannerInformation'

import api from '../../config/api'

interface ProductsType {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  value: number;
  tags: [];
}

export function Home() {
  const [products, setProducts] = useState<ProductsType[]>([]);

  useEffect(() => {
    getProductsList();
  }, []);

  async function getProductsList() {
    let json = await api.getProducts();
    setProducts(json);
  }

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
        <h1>Nossos cafés</h1>
        <ProductsListContainer>
          {products.map(product => (
            <Product product={product} />
          ))}
        </ProductsListContainer>
      </HomeSectionProducts>
    </HomeContainer>
  )
}