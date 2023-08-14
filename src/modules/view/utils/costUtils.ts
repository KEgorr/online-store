import { app } from '../../..';
import { IStorageData } from '../../types/dataTypes';

export function getTotalCost(items: IStorageData[]) {
  const totalCost = items.reduce((cost, item) => {
    if (item.curInCart) {
      return cost + item.price * item.curInCart;
    }
    return 0;
  }, 0);
  let discountCost = totalCost;
  if (app.promos.EPM && app.promos.RS) {
    discountCost = Math.ceil(totalCost * 0.85);
  } else if (app.promos.RS) {
    discountCost = Math.ceil(totalCost * 0.9);
  } else if (app.promos.EPM) {
    discountCost = Math.ceil(totalCost * 0.95);
  }
  return { totalCost, discountCost };
}

export function getTotalItems(items: IStorageData[]) {
  return items.reduce((number, item) => {
    if (item.curInCart) {
      return number + item.curInCart;
    }
    return 0;
  }, 0);
}
