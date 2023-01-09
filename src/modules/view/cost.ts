import { app } from '../..';
import * as data from '../data/store-items.json';
import { IStorageData } from '../types/dataTypes';

export class Cost {
  changeCostFromItemCard(event: Event) {
    const targetButton = event.target;
    if (targetButton instanceof Element) {
      const targetCard = targetButton.closest('.item');
      if (targetCard instanceof Element) {
        const addToCartButton = targetButton.closest('.add-to-cart-button');
        const cost = targetCard.querySelector('.price__current-price');
        const targetItemName = targetCard.querySelector('.item__name');
        if (addToCartButton && cost) {
          const curCost = document.querySelector('.cost-text_price');
          if (curCost instanceof HTMLSpanElement) {
            const curPriceInHeader = curCost.textContent;
            const costNumber = cost.textContent?.split('$')[0];
            const shoppingCart = document.querySelector('.shopping-cart__items');
            if (curPriceInHeader && costNumber && shoppingCart?.textContent && targetItemName) {
              const localData = app.localStorage.get('items');
              let items: IStorageData[] = [];
              if (localData) {
                items = JSON.parse(localData) as IStorageData[];
              }
              const newItem = data.products.find((el) => el.title === targetItemName.textContent);
              if (newItem) {
                if (!targetCard.classList.contains('item-in-cart')) {
                  curCost.textContent = `${parseInt(curPriceInHeader) + parseInt(costNumber)}`;
                  targetCard.classList.add('item-in-cart');
                  shoppingCart.textContent = `${parseInt(shoppingCart.textContent) + 1}`;
                  targetButton.textContent = 'Drop from cart';

                  items.push(newItem);
                } else {
                  curCost.textContent = `${parseInt(curPriceInHeader) - parseInt(costNumber)}`;
                  targetCard.classList.remove('item-in-cart');
                  targetButton.textContent = 'Add to cart';
                  shoppingCart.textContent = `${parseInt(shoppingCart.textContent) - 1}`;
                  items = items.filter((item) => item.title !== newItem.title);
                }
                app.localStorage.set('items', JSON.stringify(items));
              }
            }
          }
        }
      }
    }
  }
}
