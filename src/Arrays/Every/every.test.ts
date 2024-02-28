import { isInStock } from './index';

/*
  Objective: Write a JavaScript function that takes an array of products as its parameter
  and returns true if every product in the order is in stock
  (i.e., quantityOrdered is less than or equal to quantityInStock for every item), and false otherwise.
*/

export type ProductType = {
  name: string,
  quantityOrdered: number,
  quantityInStock: number,
};

const products:ProductType[] = [
  { name: "Laptop", quantityOrdered: 1, quantityInStock: 5 },
  { name: "Phone", quantityOrdered: 2, quantityInStock: 2 },
  { name: "Tablet", quantityOrdered: 3, quantityInStock: 0 }, // Out of stock
  { name: "Monitor", quantityOrdered: 2, quantityInStock: 4 }
];

describe('Array.every()', () => {
  test('is not in stock', () => {
    expect(isInStock(products)).toStrictEqual(false);
  });

  test('is not in stock', () => {
    products[2].quantityInStock = 5;
    expect(isInStock(products)).toStrictEqual(true);
  });
});