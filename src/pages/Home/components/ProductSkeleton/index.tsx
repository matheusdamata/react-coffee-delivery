import Skeleton from "react-loading-skeleton";
import { ProductItem, Content, ProductImage } from "./styles";

type ProductSkeletonProps = {
  products: number;
};

export function ProductSkeleton({
  products,
}: ProductSkeletonProps): any {
  return Array(products)
    .fill(0)
    .map((_, i) => (
      <ProductItem key={i}>
        <ProductImage>
          <Skeleton circle width={120} height={120} />
        </ProductImage>
        <Content>
          <Skeleton count={4} />
        </Content>
      </ProductItem>
    ));
}
