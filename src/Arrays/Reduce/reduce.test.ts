import {
  totalPrice,
  totalPriceOver100,
  totalPriceByCategory,
} from './index';

/*
  Write a JavaScript function that takes the shopping cart items as its parameter
  and returns the total price of the cart.
*/

export enum Category {
  Electronics = 'Electronics',
  Books = "Books",
  Stationery = "Stationery",
};

export type ItemType = {
  name: string,
  price: number,
  quantity: number,
  category: keyof typeof Category,
};

export type ResultType = {
  category: keyof typeof Category,
  totalPrice: number,
};

const cartItems:ItemType[] = [
  { name: "Laptop", price: 1000, quantity: 1, category: "Electronics" },
  { name: "Smartphone", price: 500, quantity: 2, category: "Electronics" },
  { name: "Book", price: 20, quantity: 4, category: "Books" },
  { name: "Pen", price: 3, quantity: 10, category: "Stationery" }
];

describe('Array.reduce()', () => {
  test('total price of cart', () => {
    expect(totalPrice(cartItems)).toBe(2110);
  });

  /*
    Variation 2:
    Calculate the total price of items in a shopping cart, but only for items that cost more than $100.
  */
  test('total price of cart but only items that cost more than $100', () => {
      expect(totalPriceOver100(cartItems)).toBe(2000);
  });

  /*
    Variation 3:
    Calculate the total price of items in a shopping cart, grouped by category. Assume each item also has a category property.
  */
  test('total price of cart but only items that cost more than $100', () => {
    const result: ResultType[] = [
      {
        category: Category.Electronics,
        totalPrice: 2000,
      },
      {
        category: Category.Books,
        totalPrice: 80,
      },
      {
        category: Category.Stationery,
        totalPrice: 30,
      }
    ];

    expect(totalPriceByCategory(cartItems)).toStrictEqual(result)
  });
});
