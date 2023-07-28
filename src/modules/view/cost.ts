import { app } from '../..';
import * as data from '../data/store-items.json';
import { IStorageData } from '../types/dataTypes';
import { Cart } from './cart';
import { Items } from './items';
import { ItemPage } from './pages/itemPage';

export class Cost {
  private cart: Cart;
  private items: Items;
  private itemPage: ItemPage;

  constructor() {
    this.cart = new Cart();
    this.items = new Items();
    this.itemPage = new ItemPage();
  }
  changeCostFromItemCard(event: Event) {
    const targetButton = event.target;

    let items: IStorageData[] = [];
    const localData = app.localStorage.get('items');

    if (localData) {
      items = JSON.parse(localData) as IStorageData[];
    }

    if (targetButton instanceof Element) {
      const newItem = data.products.find((el) => el.id === parseInt(targetButton.id)) as IStorageData;

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
            newItem.curInCart = 1;
            items.push(newItem);

            if (targetCard) {
              targetCard.classList.add('item-in-cart');
            }
          } else {
            costInHeader.textContent = `${parseInt(costInHeader.textContent) - itemCost}`;
            targetButton.textContent = 'Add to cart';
            shoppingCart.textContent = `${parseInt(shoppingCart.textContent) - 1}`;
            items = items.filter((item) => item.id !== newItem.id);

            if (targetCard) {
              targetCard.classList.remove('item-in-cart');
            }
          }
        }
      }
      app.localStorage.set('items', JSON.stringify(items));
    }
  }

  addItemToCart(event: Event) {
    const target = event.target;
    if (target instanceof Element) {
      const targetButton = target.closest('.button-stock-increase');
      if (!targetButton) return;
      let items: IStorageData[] = [];
      const localData = app.localStorage.get('items');

      if (localData) {
        items = JSON.parse(localData) as IStorageData[];
      }

      const newItem = data.products.find((el) => el.id === parseInt(targetButton.id)) as IStorageData;

      if (newItem) {
        const currentItem = items.find((el) => el.id === newItem.id);
        if (!currentItem) {
          newItem.curInCart = 1;
          items.push(newItem);
        } else {
          if (currentItem.curInCart) {
            if (currentItem.curInCart >= currentItem.stock) {
              return;
            }
            currentItem.curInCart += 1;
          }
        }
      }

      app.localStorage.set('items', JSON.stringify(items));
      this.updateItemsInCart(items);
      const itemsSection = document.querySelector('.items-section');
      if (itemsSection) {
        this.items.drawItems(data.products);
        return;
      }
      const cartSection = document.querySelector('.cartSection');
      if (cartSection) {
        this.cart.drawCart();
        return;
      }
      const itemPageSection = document.querySelector('.item-page');
      if (itemPageSection) {
        this.itemPage.drawItemPage(newItem);
        return;
      }
    }
  }

  removeItemFromCart(event: Event) {
    const target = event.target;
    if (target instanceof Element) {
      const targetButton = target.closest('.button-stock-reduce');
      if (!targetButton) return;
      let items: IStorageData[] = [];
      const localData = app.localStorage.get('items');

      if (localData) {
        items = JSON.parse(localData) as IStorageData[];
      }

      const currentItem = items.find((el) => el.id === parseInt(targetButton.id)) as IStorageData;
      if (currentItem.curInCart) {
        currentItem.curInCart -= 1;
        if (currentItem.curInCart === 0) {
          items = items.filter((item) => item.id !== currentItem.id);
        }
      }

      app.localStorage.set('items', JSON.stringify(items));
      this.updateItemsInCart(items);

      const itemsSection = document.querySelector('.items-section');
      if (itemsSection) {
        this.items.drawItems(data.products);
        return;
      }
      const cartSection = document.querySelector('.cartSection');
      if (cartSection) {
        this.cart.drawCart();
        return;
      }
      const itemPageSection = document.querySelector('.item-page');
      if (itemPageSection) {
        this.itemPage.drawItemPage(currentItem);
        return;
      }
    }
  }

  updateItemsInCart(items: IStorageData[]) {
    const costInHeader = document.querySelector('.cost-text_price');
    const itemsNumberHeader = document.querySelector('.shopping-cart__items');

    const itemsNumberCart = document.querySelector('.char-value info-number__products');
    const costInCart = document.querySelector('.char-value info-number__total');

    const itemsNumber = this.getTotalItems(items);
    const currentCost = this.getTotalCost(items);
    if (itemsNumberHeader && costInHeader) {
      itemsNumberHeader.textContent = `${itemsNumber}`;
      costInHeader.textContent = `${currentCost}`;
    }

    if (itemsNumberCart && costInCart) {
      itemsNumberCart.textContent = `${itemsNumber}`;
      costInCart.textContent = `${currentCost}$`;
    }
  }

  getTotalCost(items: IStorageData[]) {
    return items.reduce((cost, item) => {
      if (item.curInCart) {
        return cost + item.price * item.curInCart;
      }
      return 0;
    }, 0);
  }

  getTotalItems(items: IStorageData[]) {
    return items.reduce((number, item) => {
      if (item.curInCart) {
        return number + item.curInCart;
      }
      return 0;
    }, 0);
  }
}
