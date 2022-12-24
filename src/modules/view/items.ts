import { IStorageData } from '../types/dataTypes';

export class Items {
  drawItems(data: IStorageData[]): void {
    const items = this.filterItems(data);

    const fragment = document.createDocumentFragment();
    const itemTemp: HTMLTemplateElement | null = document.querySelector('#itemTemp');

    if (itemTemp) {
      items.forEach((item: IStorageData) => {
        const itemClone = itemTemp.content.cloneNode(true);

        if (itemClone instanceof DocumentFragment) {
          const itemName: HTMLParagraphElement | null = itemClone.querySelector('.item__name');
          const itemImg: HTMLSpanElement | null = itemClone.querySelector('.item__img');
          const itemDiscount: HTMLSpanElement | null = itemClone.querySelector('.item__discount');
          const itemCharStock: HTMLSpanElement | null = itemClone.querySelector('.characteristics__stock');
          const itemCharBrand: HTMLSpanElement | null = itemClone.querySelector('.characteristics__brand');
          const itemCharCategory: HTMLSpanElement | null = itemClone.querySelector('.characteristics__category');
          const itemCharRating: HTMLSpanElement | null = itemClone.querySelector('.characteristics__rating');
          const curPrice: HTMLParagraphElement | null = itemClone.querySelector('.price__current-price');
          const origPrice: HTMLSpanElement | null = itemClone.querySelector('.price__original-price');

          if (
            itemName &&
            itemImg &&
            itemDiscount &&
            itemCharStock &&
            itemCharBrand &&
            itemCharCategory &&
            itemCharRating &&
            curPrice &&
            origPrice
          ) {
            itemName.textContent = item.title;
            itemImg.style.backgroundImage = `url(${item.thumbnail})`;
            itemDiscount.textContent = `-${item.discountPercentage}%`;
            itemCharStock.textContent = `${item.stock}`;
            itemCharBrand.textContent = item.brand;
            itemCharCategory.textContent = item.category;
            itemCharRating.textContent = `${item.rating}`;
            curPrice.textContent = `${item.price}$`;
            origPrice.textContent = `${(item.price / (1 - item.discountPercentage / 100)).toFixed(0)}$`;

            fragment.append(itemClone);
          }
        }
      });
    }
    const itemsSection = document.querySelector('.items-section');

    if (itemsSection) {
      itemsSection.innerHTML = '';
      itemsSection.appendChild(fragment);
    }
  }

  filterItems(data: IStorageData[]): IStorageData[] {
    const params = window.location.search;

    if (params) {
      // TODO filters by different values
      // const params = location.search;
      // const param = new URLSearchParams(params);
      // const arrParams = Array.from(param.entries());
      // arrParams.forEach((arr) => {
      //   data.forEach((item: IStorageData) => {
      //     console.log(item);
      //   });
      //   console.log(arr);
      // });
      // const result = params
      //   .slice(params.indexOf('?') + 1)
      //   .split('&')
      //   .reduce((param, hash) => {
      //     const [key, val] = hash.split('=');
      //     return Object.assign(param, { [key]: decodeURIComponent(val) });
      //   }, {});
      // console.log(result);
    }
    return data;
  }
}
