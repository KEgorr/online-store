import { app } from '../..';
import * as data from '../data/store-items.json';
import { IStorageData } from '../types/dataTypes';

export class Cost {
  changeCostFromItemCard(event: Event) {
    const targetButton = event.target;

    let items: IStorageData[] = [];
    const localData = app.localStorage.get('items');

    if (localData) {
      items = JSON.parse(localData) as IStorageData[];
    }

    if (targetButton instanceof Element) {
      const newItem = data.products.find((el) => el.id === parseInt(targetButton.id));

      if (newItem) {
        const itemCost = newItem.price;
        const costInHeader = document.querySelector('.cost-text_price');
        const shoppingCart = document.querySelector('.shopping-cart__items');

        if (costInHeader?.textContent && shoppingCart?.textContent) {
          const targetCard = targetButton.closest('.item');

          if (!items.find((el) => el.id === newItem.id)) {
            costInHeader.textContent = `${parseInt(costInHeader.textContent) + itemCost}`;
            targetButton.textContent = 'Drop from cart';
            shoppingCart.textContent = `${parseInt(shoppingCart.textContent) + 1}`;
            items.push(newItem);

            if (targetCard) {
              targetCard.classList.add('item-in-cart');
            }
          } else {
            costInHeader.textContent = `${parseInt(costInHeader.textContent) - itemCost}`;
            targetButton.textContent = 'Add to cart';
            shoppingCart.textContent = `${parseInt(shoppingCart.textContent) - 1}`;
            items = items.filter((item) => item.title !== newItem.title);

            if (targetCard) {
              targetCard.classList.remove('item-in-cart');
            }
          }
        }
      }
      app.localStorage.set('items', JSON.stringify(items));
    }
  }
}
