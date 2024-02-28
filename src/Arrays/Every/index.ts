import { ProductType } from './every.test';

export const isInStock = (products: ProductType[]) => {
  return products.every((product: ProductType) => product.quantityInStock >= product.quantityOrdered);
};