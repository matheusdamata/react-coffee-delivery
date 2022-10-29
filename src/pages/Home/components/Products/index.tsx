import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { ProductContainer, ProductItem, ProductItemFooter, ProductItemFooterAddToCart, ProductItemFooterButtonAddToCart, ProductItemTagCoffe, ProductsListContent } from './styles'

import CoffeeExpressImage from '../../../../assets/products/Type=Expresso.svg'

export function Products() {
  return (
    <ProductContainer>
      <h1>Nossos cafés</h1>
      <ProductsListContent>
        <ProductItem>
          <img src={CoffeeExpressImage} alt="Imagem Café Expresso" width={120} height={120} />
          <ProductItemTagCoffe>
            <strong>TRADICIONAL</strong>
          </ProductItemTagCoffe>
          <strong>Expresso Tradicional</strong>
          <span>O tradicional café feito com água quente e grãos moídos</span>

          <ProductItemFooter>
            <span>R$ <strong>9,90</strong></span>
            <ProductItemFooterAddToCart>
              <button>
                <Minus size={14} weight="bold" />
              </button>
              1
              <button>
                <Plus size={14} weight="bold" />
              </button>
            </ProductItemFooterAddToCart>
            <ProductItemFooterButtonAddToCart>
              <ShoppingCart size={18} weight="fill" />
            </ProductItemFooterButtonAddToCart>
          </ProductItemFooter>
        </ProductItem>
      </ProductsListContent>
    </ProductContainer>
  )
}