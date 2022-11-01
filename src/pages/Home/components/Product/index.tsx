import { useContext, useState } from "react";
import { toast } from "react-toastify";

import { Minus, Plus, ShoppingCart } from "phosphor-react";

import {
  ProductItem,
  ProductItemFooter,
  ProductItemFooterAddToCart,
  ProductItemFooterButtonAddToCart,
  ProductItemTagCoffe,
  ProductItemTagCoffeeContainer,
} from "./styles";
import { Context } from "../../../../contexts/Context";

interface ProductsType {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  value: number;
  tags: [];
}

interface ProductProps {
  product: ProductsType;
}

export function Product({ product }: ProductProps) {
  const [productAmount, setProductAmount] = useState<number>(1);

  const { carts, dispatch } = useContext(Context)

  function handleAmountProduct(type: 'add' | 'remove') {
    switch (type) {
      case 'add':
        if(productAmount >= 0) setProductAmount(state => state + 1);
        break;
      case 'remove':
        if(productAmount >= 1) setProductAmount(state => state - 1);
        break;
    }
  }

  function handleAddCart() {
    if(productAmount >= 1) {
      toast.success('Produto adiciondo ao carrinho!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          id: product.id,
          name: product.name,
          value: product.value,
          quantity: productAmount
        }
      })
    } else {
      toast.error('Aumente a quantidade para adicionar ao carrinho!', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }

  return (
    <ProductItem>
      <img
        src={product.imageUrl}
        alt="Imagem Café Expresso"
        width={120}
        height={120}
      />
      <ProductItemTagCoffeeContainer>
        {product.tags.map((tag) => (
          <ProductItemTagCoffe key={tag}>
            <strong>{String(tag).toUpperCase()}</strong>
          </ProductItemTagCoffe>
        ))}
      </ProductItemTagCoffeeContainer>
      <strong>{product.name}</strong>
      <span>{product.description}</span>

      <ProductItemFooter>
        <span>
          R${" "}
          <strong>
            {product.value.toLocaleString("pt-br", {
              minimumFractionDigits: 2,
            })}
          </strong>
        </span>
        <ProductItemFooterAddToCart>
          <button
            onClick={() => handleAmountProduct('remove')}
          >
            <Minus size={14} weight="bold" />
          </button>
          {productAmount}
          <button
            onClick={() => handleAmountProduct('add')}
          >
            <Plus size={14} weight="bold" />
          </button>
        </ProductItemFooterAddToCart>
        <ProductItemFooterButtonAddToCart onClick={handleAddCart}>
          <ShoppingCart size={18} weight="fill" />
        </ProductItemFooterButtonAddToCart>
      </ProductItemFooter>
    </ProductItem>
  );
}
