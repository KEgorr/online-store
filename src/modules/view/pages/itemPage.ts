import { app } from '../../..';
import { IStorageData } from '../../types/dataTypes';
import { Cost } from '../cost';

export class ItemPage {
  private costChanging: Cost;

  constructor() {
    this.costChanging = new Cost();
  }

  public drawItemPage(item: IStorageData) {
    const fragment = document.createDocumentFragment();
    const pageTemp: HTMLTemplateElement | null = document.querySelector('#itemPage');

    if (pageTemp) {
      const pageClone = pageTemp.content.cloneNode(true);

      if (pageClone instanceof DocumentFragment) {
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
        const addToCartButton = pageClone.querySelector('.add-to-cart-button .default-button');

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
          addToCartButton
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
          addToCartButton.id = `${item.id}`;

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
          if (localItems.find((el) => el.id === item.id)) {
            addToCartButton.textContent = 'Drop from cart';
          }
          addToCartButton.addEventListener('click', (event) => this.costChanging.changeCostFromItemCard(event));
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
