import { app } from '../..';
import { IStorageData } from '../types/dataTypes';
import { getTotalCost, getTotalItems } from './utils/costUtils';

export class Cart {
  drawCart() {
    const { localItems, items, pageNumber, limit } = this.getDataItems();

    const fragment = document.createDocumentFragment();
    if (localItems.length === 0) {
      const cartEmptyText = document.createElement('p');
      cartEmptyText.classList.add('empty-cart-text');
      cartEmptyText.textContent = 'Cart is Empty';
      fragment.append(cartEmptyText);
    } else {
      const cartPageTemp: HTMLTemplateElement | null = document.querySelector('#cartPage');
      const productsTemp: HTMLTemplateElement | null = document.querySelector('#productsInCart');

      if (cartPageTemp && productsTemp) {
        const cartClone = cartPageTemp.content.cloneNode(true);

        items.forEach((item, index) => {
          const itemClone = productsTemp.content.cloneNode(true);

          if (itemClone instanceof DocumentFragment && cartClone instanceof DocumentFragment) {
            const productNumber: HTMLParagraphElement | null = itemClone.querySelector('.product__number');
            const productImg: HTMLDivElement | null = itemClone.querySelector('.product__img');
            const productTittle: HTMLParagraphElement | null = itemClone.querySelector('.product-info__tittle');
            const productDescription: HTMLParagraphElement | null = itemClone.querySelector(
              '.product-info__description'
            );
            const productRating: HTMLSpanElement | null = itemClone.querySelector('.rating-value');
            const productDiscount: HTMLSpanElement | null = itemClone.querySelector('.discount-value');
            const productStock: HTMLSpanElement | null = itemClone.querySelector('.stock-value');
            const curInCart: HTMLParagraphElement | null = itemClone.querySelector('.current-product-number');
            const price: HTMLSpanElement | null = itemClone.querySelector('.price-value');
            const addItemToCartButton: HTMLElement | null = itemClone.querySelector('.button-stock-increase');
            const removeItemToCartButton: HTMLElement | null = itemClone.querySelector('.button-stock-reduce');

            const productsBlock: HTMLDivElement | null = cartClone.querySelector('.products');
            const totalProducts: HTMLSpanElement | null = cartClone.querySelector('.info-number__products');
            const totalCost: HTMLSpanElement | null = cartClone.querySelector('.info-number__total');
            const limitNumber: HTMLInputElement | null = cartClone.querySelector('.limit__number');
            const pageNumberText: HTMLParagraphElement | null = cartClone.querySelector('.pages__number');

            if (
              productNumber &&
              productImg &&
              productTittle &&
              productDescription &&
              productRating &&
              productDiscount &&
              productStock &&
              curInCart &&
              price &&
              productsBlock &&
              totalCost &&
              totalProducts &&
              addItemToCartButton &&
              removeItemToCartButton &&
              limitNumber &&
              pageNumberText
            ) {
              pageNumberText.textContent = `${pageNumber}`;
              limitNumber.value = `${limit}`;
              productNumber.textContent = `${index + 1}`;
              productImg.style.backgroundImage = `url(${item.thumbnail})`;
              productTittle.textContent = item.title;
              productDescription.textContent = item.description;
              productRating.textContent = `${item.rating}`;
              productDiscount.textContent = `${item.discountPercentage}%`;
              productStock.textContent = `${item.stock}`;
              if (item.curInCart) {
                curInCart.textContent = `${item.curInCart}`;
              }
              totalProducts.textContent = `${getTotalItems(localItems)}`;
              totalCost.textContent = `${getTotalCost(localItems)}$`;
              price.textContent = `${item.price}$`;

              addItemToCartButton.id = `${item.id}`;
              removeItemToCartButton.id = `${item.id}`;

              itemClone.querySelector('.product')?.setAttribute('id', `${item.id}`);
              productsBlock.appendChild(itemClone);
            }
          }
        });
        fragment.appendChild(cartClone);
      }
    }

    const main = document.querySelector('.main .wrapper');

    if (main) {
      main.innerHTML = '';
      main.appendChild(fragment);
    }
  }

  changeLimitInCart(event: Event) {
    const target = event.target;
    if (target instanceof Element) {
      const limitCounter = target.closest('.limit__number');
      if (!limitCounter) return;
      if (limitCounter instanceof HTMLInputElement) {
        localStorage.setItem('cartLimit', limitCounter.value);
      }
    }
    this.drawCart();
  }

  getDataItems(): { localItems: IStorageData[]; items: IStorageData[]; pageNumber: number; limit: number } {
    const localData = app.localStorage.get('items');
    let localItems: IStorageData[] = [];
    if (localData) {
      localItems = JSON.parse(localData) as IStorageData[];
    }
    let limit = 3;
    let pageNumber = 1;
    const localLimit = app.localStorage.get('cartLimit');
    const localPageNumber = app.localStorage.get('cartPageNumber');
    if (localLimit && localPageNumber) {
      limit = parseInt(localLimit);
      pageNumber = parseInt(localPageNumber);
    }
    const items = localItems.slice().splice((pageNumber - 1) * limit, limit);

    if (items.length === 0 && localItems.length !== 0) {
      app.localStorage.set('cartPageNumber', `${pageNumber - 1}`);
      return this.getDataItems();
    }

    return { localItems, items, pageNumber, limit };
  }

  cartPageIncrease(event: Event) {
    const target = event.target;

    if (target instanceof HTMLElement && target.closest('.pages-button-right')) {
      const pageNumberData = app.localStorage.get('cartPageNumber');
      if (pageNumberData) {
        const pageNumber = parseInt(pageNumberData);
        app.localStorage.set('cartPageNumber', `${pageNumber + 1}`);
        this.drawCart();
      }
    }
  }

  cartPageDecrease(event: Event) {
    const target = event.target;

    if (target instanceof HTMLElement && target.closest('.pages-button-left')) {
      const pageNumberData = app.localStorage.get('cartPageNumber');
      if (pageNumberData) {
        const pageNumber = parseInt(pageNumberData);
        if (pageNumber === 1) {
          return;
        }
        app.localStorage.set('cartPageNumber', `${pageNumber - 1}`);
        this.drawCart();
      }
    }
  }
}
