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

        items.forEach((item) => {
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
            const totalCostText: HTMLSpanElement | null = cartClone.querySelector('.info-number__total');
            const discountCostText: HTMLSpanElement | null = cartClone.querySelector('.price__current-price');
            const limitNumber: HTMLInputElement | null = cartClone.querySelector('.limit__number');
            const pageNumberText: HTMLParagraphElement | null = cartClone.querySelector('.pages__number');

            const rsPromo: HTMLParagraphElement | null = cartClone.querySelector('#RS-promo');
            const epmPromo: HTMLParagraphElement | null = cartClone.querySelector('#EPM-promo');
            const invalidPromo: HTMLParagraphElement | null = cartClone.querySelector('#invalid-promo');

            const indexInCart = item.indexInCart;
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
              totalCostText &&
              totalProducts &&
              addItemToCartButton &&
              removeItemToCartButton &&
              limitNumber &&
              pageNumberText &&
              indexInCart &&
              rsPromo &&
              epmPromo &&
              invalidPromo &&
              discountCostText
            ) {
              pageNumberText.textContent = `${pageNumber}`;
              limitNumber.value = `${limit}`;

              productNumber.textContent = `${indexInCart}`;
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

              const { totalCost, discountCost } = getTotalCost(localItems);
              totalCostText.textContent = `${totalCost}$`;
              price.textContent = `${item.price}$`;

              addItemToCartButton.id = `${item.id}`;
              removeItemToCartButton.id = `${item.id}`;

              if (app.promos.RS) {
                rsPromo.classList.remove('text-hidden');
              }
              if (app.promos.EPM) {
                epmPromo.classList.remove('text-hidden');
              }

              if (app.promos.EPM || app.promos.RS) {
                discountCostText.classList.remove('text-hidden');
                discountCostText.textContent = `${discountCost}$`;
                totalCostText.classList.add('price__original-price');
              }

              if (app.promos.invalidPromo) {
                invalidPromo.classList.add('promo__promo-code-failed_show');
              }

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
      app.promos.invalidPromo = false;
    }
  }

  changeLimitInCart(event: Event) {
    const target = event.target;
    if (target instanceof Element) {
      const limitCounter = target.closest('.limit__number');
      if (!limitCounter) return;
      if (limitCounter instanceof HTMLInputElement) {
        app.limitCartPage = parseInt(limitCounter.value);
      }
    }
    this.drawCart();
  }

  getDataItems(): { localItems: IStorageData[]; items: IStorageData[]; pageNumber: number; limit: number } {
    const localData = app.localStorage.get('items');
    let localItems: IStorageData[] = [];
    if (localData) {
      localItems = JSON.parse(localData) as IStorageData[];
      localItems.map((item, i) => (item.indexInCart = i + 1));
    }
    const limit = app.limitCartPage;
    const pageNumber = app.cartPageNumber;

    const items = localItems.slice().splice((pageNumber - 1) * limit, limit);

    if (items.length === 0 && localItems.length !== 0) {
      app.cartPageNumber = pageNumber - 1;
      return this.getDataItems();
    }

    return { localItems, items, pageNumber, limit };
  }

  cartPageIncrease(event: Event) {
    const target = event.target;

    if (target instanceof HTMLElement && target.closest('.pages-button-right')) {
      const pageNumberData = app.cartPageNumber;

      app.cartPageNumber = pageNumberData + 1;
      this.drawCart();
    }
  }

  cartPageDecrease(event: Event) {
    const target = event.target;

    if (target instanceof HTMLElement && target.closest('.pages-button-left')) {
      const pageNumber = app.cartPageNumber;
      if (pageNumber === 1) {
        return;
      }
      app.cartPageNumber = pageNumber - 1;
      this.drawCart();
    }
  }

  enterPromoCode(event: Event) {
    const target = event.target;
    if (target instanceof HTMLInputElement && target.closest('.promo') && event instanceof KeyboardEvent) {
      const promoInput = target.value;

      if (event.key === 'Enter') {
        if (promoInput === 'RS') {
          app.promos.RS = true;
        } else if (promoInput === 'EPM') {
          app.promos.EPM = true;
        } else {
          app.promos.invalidPromo = true;
        }
        this.drawCart();
      }
    }
  }

  removePromoCode(event: Event) {
    const target = event.target;

    if (target instanceof HTMLSpanElement) {
      if (target.closest('#RS-cancel')) {
        app.promos.RS = false;
        this.drawCart();
      }
      if (target.closest('#EPM-cancel')) {
        app.promos.EPM = false;
        this.drawCart();
      }
    }
  }
}
