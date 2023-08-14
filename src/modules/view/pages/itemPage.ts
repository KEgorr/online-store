import { app } from '../../..';
import { IStorageData } from '../../types/dataTypes';

export class ItemPage {
  public drawItemPage(item: IStorageData) {
    const fragment = document.createDocumentFragment();
    const pageTemp: HTMLTemplateElement | null = document.querySelector('#itemPage');
    const productsTemp: HTMLTemplateElement | null = document.querySelector('#productsInCart');

    if (pageTemp && productsTemp) {
      const pageClone = pageTemp.content.cloneNode(true);
      const productsClone = productsTemp.content.cloneNode(true);

      if (pageClone instanceof DocumentFragment && productsClone instanceof DocumentFragment) {
        const itemCategoryPath: HTMLParagraphElement | null = pageClone.querySelector('.item-path__text_category');
        const itemBrandPath: HTMLParagraphElement | null = pageClone.querySelector('.item-path__text_brand');
        const itemTittlePath: HTMLParagraphElement | null = pageClone.querySelector('.item-path__text_tittle');
        const tittle: HTMLParagraphElement | null = pageClone.querySelector('.item-info__name');
        const sideImages: HTMLDivElement | null = pageClone.querySelector('.side-images');
        const mainImg: HTMLDivElement | null = pageClone.querySelector('.main-image');
        const discountPercentage: HTMLSpanElement | null = pageClone.querySelector('.item__discount_info');
        const description: HTMLLIElement | null = pageClone.querySelector('.characteristics__description');
        const stock: HTMLLIElement | null = pageClone.querySelector('.characteristics__stock');
        const brand: HTMLLIElement | null = pageClone.querySelector('.characteristics__brand');
        const category: HTMLLIElement | null = pageClone.querySelector('.characteristics__category');
        const rating: HTMLLIElement | null = pageClone.querySelector('.characteristics__rating');
        const curPrice: HTMLParagraphElement | null = pageClone.querySelector('.price__current-price');
        const origPrice: HTMLSpanElement | null = pageClone.querySelector('.price__original-price');
        const storeLink: HTMLParagraphElement | null = pageClone.querySelector('.item-path__text_store');
        const addToCartButtonBlock = pageClone.querySelector('.add-to-cart-button');
        const addToCartDefaultButton = pageClone.querySelector('.add-to-cart-button .button-stock-increase');

        if (
          itemCategoryPath &&
          itemBrandPath &&
          itemTittlePath &&
          tittle &&
          sideImages &&
          mainImg &&
          discountPercentage &&
          description &&
          stock &&
          brand &&
          category &&
          rating &&
          curPrice &&
          origPrice &&
          storeLink &&
          addToCartButtonBlock &&
          addToCartDefaultButton
        ) {
          itemCategoryPath.textContent = item.category;
          itemBrandPath.textContent = item.brand;
          itemTittlePath.textContent = item.title;
          tittle.textContent = item.title;
          item.images.forEach((img) => {
            const imgItem = document.createElement('p');
            imgItem.classList.add('side-images__img');
            imgItem.style.backgroundImage = `url(${img})`;
            sideImages.appendChild(imgItem);
          });
          mainImg.style.backgroundImage = `url(${item.thumbnail})`;
          discountPercentage.textContent = `-${item.discountPercentage}%`;
          description.textContent = item.description;
          stock.textContent = `${item.stock}`;
          brand.textContent = item.brand;
          category.textContent = item.category;
          rating.textContent = `${item.rating}`;
          curPrice.textContent = `${item.price}$`;
          origPrice.textContent = `${(item.price / (1 - item.discountPercentage / 100)).toFixed(0)}$`;
          addToCartDefaultButton.id = `${item.id}`;

          fragment.append(pageClone);

          const main = document.querySelector('.main .wrapper');

          if (main) {
            main.innerHTML = '';
            main.appendChild(fragment);
          }
          itemCategoryPath.addEventListener('click', () => {
            app.pageRouter.navigateTo(`?category=${item.category}`);
          });
          itemBrandPath.addEventListener('click', () =>
            app.pageRouter.navigateTo(`?category=${encodeURI(item.category)}&brand=${encodeURI(item.brand)}`)
          );
          storeLink.addEventListener('click', () => app.pageRouter.navigateTo('/'));
          sideImages.addEventListener('click', (event) => {
            this.changeImg(event);
          });

          const localData = app.localStorage.get('items');
          let localItems: IStorageData[] = [];
          if (localData) {
            localItems = JSON.parse(localData) as IStorageData[];
          }
          const localItem = localItems.find((el) => el.id === item.id);
          if (localItem) {
            const controlPanel = productsClone.querySelector('.stock-changing');
            const addItemToCartButton = productsClone.querySelector('.button-stock-increase');
            const removeItemFromCartButton = productsClone.querySelector('.button-stock-reduce');
            const itemsInCart = productsClone.querySelector('.current-product-number');
            if (controlPanel && addItemToCartButton && removeItemFromCartButton && itemsInCart) {
              addItemToCartButton.id = `${item.id}`;
              removeItemFromCartButton.id = `${item.id}`;
              if (localItem.curInCart) {
                itemsInCart.textContent = `${localItem.curInCart}`;
              }
              addToCartButtonBlock.innerHTML = '';
              addToCartButtonBlock.appendChild(controlPanel);
            }
          }
        }
      }
    }
  }
  private changeImg(event: Event) {
    const imgTarget = event.target;

    if (imgTarget instanceof Element) {
      const img = imgTarget.closest('.side-images__img');
      if (img instanceof HTMLParagraphElement) {
        const mainImg = document.querySelector('.main-image');
        if (mainImg instanceof HTMLDivElement) {
          mainImg.style.backgroundImage = img.style.backgroundImage;
        }
      }
    }
  }
}
