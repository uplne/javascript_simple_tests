import { Category, ItemType, ResultType } from './reduce.test';

export const totalPrice = (items: ItemType[]) => {
  return items.reduce((total:number, item:ItemType) => {
    return total += item.price * item.quantity;
  }, 0);
};

export const totalPriceOver100 = (items: ItemType[]) => {
  const filteredItems = items.filter((item: ItemType) => item.price >= 100);
  return totalPrice(filteredItems);
};

export const totalPriceByCategory = (items: ItemType[]) => {
  return items.reduce((total: ResultType[], item: ItemType) => {
    const hasCategoryIndex = total.findIndex((totalItem: ResultType) => item.category === totalItem.category);

    if (hasCategoryIndex === -1) {
      total.push({
        category: item.category,
        totalPrice: item.price * item.quantity,
      });
    } else {
      total[hasCategoryIndex].totalPrice += item.price * item.quantity;
    }

    return total;
  }, [])
};