import { useEffect, useState } from "react";

import api from "../../../config/api";

import { ProductsType } from "../../Home";

import CoffeeCartEmptyImage from "../../../assets/products/Type=CafeGelado.svg";

export function RandomImages() {
  const [randomImage, setRandomImage] = useState<string>("");
  const [products, setProducts] = useState<ProductsType[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getProductsList();
  }, []);

  useEffect(() => {
    generateRandomImage();
  }, [loading === true]);

  async function getProductsList() {
    try {
      setLoading(true);
      const json = await api.getProducts();
      if (json.length > 0) {
        setProducts(json);
        setLoading(false);
      }
    } catch (error) {
      setProducts([]);
      setLoading(false);

      console.log("Tente novamente mais tarde!", error);
    }
  }

  function generateRandomImage() {
    const result = products.find(
      (product) => product.id === Math.floor(Math.random() * 14) + 1
    );
    console.log("Result: ", result);

    if (result) {
      setRandomImage(() => result!.imageUrl);
    } else {
      setRandomImage(() => CoffeeCartEmptyImage);
    }
  }

  return (
    <img src={randomImage} alt="Imagem café do carrinho vázio" />
  );
}
