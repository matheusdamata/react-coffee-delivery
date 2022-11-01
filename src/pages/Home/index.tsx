import { useEffect, useState } from 'react'

import {
  BackgroundImageBanner,
  HomeContainer,
  HomeSectionBanner,
  HomeSectionProducts,
  InformationalIconsBanner,
  InformationalIconsBannerContainer,
  ProductsListContainer,
  SideLeft,
  SideRight,
} from './styles'

import CoffeDeliveryImage from '../../assets/banner-coffe-delivery.svg'

import { AllInformationalIcons } from './components/InformationalIcons'
import { Product } from './components/Product'
import { BannerInformation } from './components/BannerInformation'

import api from '../../config/api'

import { ProductSkeleton } from './components/ProductSkeleton'

export interface ProductsType {
  id: number
  imageUrl: string
  name: string
  description: string
  value: number
  tags: []
}

export function Home() {
  const [products, setProducts] = useState<ProductsType[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    getProductsList()
  }, [])

  async function getProductsList() {
    try {
      setLoading(true)

      const json = await api.getProducts()
      if (json.length > 0) {
        setProducts(json)
        setLoading(false)
      }
    } catch (error) {
      setProducts([])
      setLoading(false)
      console.log('Tente novamente mais tarde!', error)
    }
  }

  return (
    <HomeContainer>
      <HomeSectionBanner>
        <SideLeft>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>

          <InformationalIconsBanner>
            {AllInformationalIcons.map((icon) => (
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
          {loading && <ProductSkeleton products={14} />}
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ProductsListContainer>
      </HomeSectionProducts>
    </HomeContainer>
  )
}
