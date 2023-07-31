import { IStorageData } from '../../types/dataTypes';

export function getTotalCost(items: IStorageData[]) {
  return items.reduce((cost, item) => {
    if (item.curInCart) {
      return cost + item.price * item.curInCart;
    }
    return 0;
  }, 0);
}

export function getTotalItems(items: IStorageData[]) {
  return items.reduce((number, item) => {
    if (item.curInCart) {
      return number + item.curInCart;
    }
    return 0;
  }, 0);
}
