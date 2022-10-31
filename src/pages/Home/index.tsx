import { useContext, useEffect, useState } from 'react'

import { 
  BackgroundImageBanner,
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

import { Context } from '../../contexts/Context'

interface ProductsType {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  value: number;
  tags: [];
}

export function Home() {
  const { carts } = useContext(Context)

  console.log(carts);
  
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
              <InformationalIconsBannerContainer key={icon.id}>
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
        <BackgroundImageBanner></BackgroundImageBanner>
      </HomeSectionBanner>
      <HomeSectionProducts>
        <h1>Nossos cafés</h1>
        <ProductsListContainer>
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </ProductsListContainer>
      </HomeSectionProducts>
    </HomeContainer>
  )
}