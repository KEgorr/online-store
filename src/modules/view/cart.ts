import { app } from '../..';
import { IStorageData } from '../types/dataTypes';

export class Cart {
  drawCart() {
    const localData = app.localStorage.get('items');
    let localItems: IStorageData[] = [];
    if (localData) {
      localItems = JSON.parse(localData) as IStorageData[];
    }
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

        let totalCostNumber = 0;
        let totalProductsNumber = 0;
        localItems.forEach((item, index) => {
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

            const productsBlock: HTMLDivElement | null = cartClone.querySelector('.products');
            const totalProducts: HTMLSpanElement | null = cartClone.querySelector('.info-number__products');
            const totalCost: HTMLSpanElement | null = cartClone.querySelector('.info-number__total');
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
              totalProducts
            ) {
              productNumber.textContent = `${index + 1}`;
              productImg.style.backgroundImage = `url(${item.thumbnail})`;
              productTittle.textContent = item.title;
              productDescription.textContent = item.description;
              productRating.textContent = `${item.rating}`;
              productDiscount.textContent = `${item.discountPercentage}%`;
              productStock.textContent = `${item.stock}`;
              if (item.curInCart) {
                curInCart.textContent = `${item.curInCart}`;
                totalProductsNumber = totalProductsNumber + item.curInCart;
                totalCostNumber = totalCostNumber + item.curInCart * item.price;
              }
              price.textContent = `${item.price}$`;

              totalCost.textContent = `${totalCostNumber}$`;
              totalProducts.textContent = `${totalProductsNumber}`;

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
}
