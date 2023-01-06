import { IStorageData } from '../types/dataTypes';

export class ItemPage {
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
          origPrice
        ) {
          itemCategoryPath.textContent = item.category;
          itemBrandPath.textContent = item.brand;
          itemTittlePath.textContent = item.title;
          tittle.textContent = item.title;
          item.images.forEach((img) => {
            const imgItem = document.createElement('p');
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

          fragment.append(pageClone);

          const main = document.querySelector('.main .wrapper');

          if (main) {
            main.innerHTML = '';
            main.appendChild(fragment);
          }
        }
      }
    }
  }
}
