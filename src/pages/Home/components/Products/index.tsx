import { ShoppingCart } from 'phosphor-react'
import { ProductContainer, ProductItem, ProductItemFooter, ProductItemFooterAddToCart, ProductsListContent } from './styles'

import CoffeeExpressImage from '../../../../assets/products/Type=Expresso.svg'

export function Products() {
  return (
    <ProductContainer>
      <h1>Nossos cafés</h1>
      <ProductsListContent>
        <ProductItem>
          <img src={CoffeeExpressImage} alt="Imagem Café Expresso" width={120} height={120} />
          <strong>TRADICIONAL</strong>
          <h1>Expresso Tradicional</h1>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <ProductItemFooter>
            <h2><span>R$ </span>9,90</h2>
            <ProductItemFooterAddToCart>
              <button>-</button>
              1
              <button>+</button>
            </ProductItemFooterAddToCart>
            <button>
              <ShoppingCart size={25} weight="fill" />
            </button>
          </ProductItemFooter>
        </ProductItem>
      </ProductsListContent>
    </ProductContainer>
  )
}