import { useEffect, useState } from 'react'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { ProductContainer, ProductItem, ProductItemFooter, ProductItemFooterAddToCart, ProductItemFooterButtonAddToCart, ProductItemTagCoffe, ProductItemTagCoffeeContainer, ProductsListContent } from './styles'

import CoffeeExpressImage from '../../../../assets/products/Type=Expresso.svg'

import api from '../../../../config/api'

interface ProductsType {
  id: string
  imageUrl: string
  name: string
  description: string
  value: number
  tags: []
}

export function Products() {
  const [products, setProducts] = useState<ProductsType[]>([])
  const [productAmount, setProductAmount] = useState<number>(0)

  useEffect(() => {
    getProductsList()
  }, [])

  async function getProductsList() {
    let json = await api.getProducts()
    setProducts(json)
  }

  return (
    <ProductContainer>
      <h1>Nossos cafés</h1>
      <ProductsListContent>
        {products.map((product) => (
          <ProductItem key={product.id}>
            <img src={product.imageUrl} alt="Imagem Café Expresso" width={120} height={120} />
            <ProductItemTagCoffeeContainer>
              {product.tags.map((tag) => (
                <ProductItemTagCoffe>
                  <strong>{String(tag).toUpperCase()}</strong>
                </ProductItemTagCoffe>
              ))}
            </ProductItemTagCoffeeContainer>
            <strong>{product.name}</strong>
            <span>{product.description}</span>

            <ProductItemFooter>
              <span>R$ <strong>{product.value.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</strong></span>
              <ProductItemFooterAddToCart>
                <button onClick={() => setProductAmount(productAmount + 1)}>
                  <Minus size={14} weight="bold" />
                </button>
                {productAmount}
                <button>
                  <Plus size={14} weight="bold" />
                </button>
              </ProductItemFooterAddToCart>
              <ProductItemFooterButtonAddToCart>
                <ShoppingCart size={18} weight="fill" />
              </ProductItemFooterButtonAddToCart>
            </ProductItemFooter>
          </ProductItem>
        ))}
      </ProductsListContent>
    </ProductContainer>
  )
}