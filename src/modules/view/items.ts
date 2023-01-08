import { IStorageData } from '../types/dataTypes';

export class Items {
  drawItems(data: IStorageData[]): void {
    const items = this.filterItems(data);

    const fragment = document.createDocumentFragment();
    const itemTemp: HTMLTemplateElement | null = document.querySelector('#itemTemp');

    if (itemTemp) {
      if (items.length === 0) {
        const noItemsText = document.createElement('p');
        noItemsText.textContent = 'No Items found 😥';
        noItemsText.classList.add('no-items-text');
        fragment.append(noItemsText);
      } else {
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

              itemClone.querySelector('.item')?.setAttribute('id', `${item.id}`);
              fragment.append(itemClone);
            }
          }
        });
      }
    }
    const itemsSection = document.querySelector('.items-section');

    if (itemsSection) {
      itemsSection.innerHTML = '';
      itemsSection.appendChild(fragment);
    }
    const itemsFound: HTMLParagraphElement | null = document.querySelector('.items-found');

    if (itemsFound) {
      itemsFound.textContent = `Items found: ${items.length}`;
    }
  }

  filterItems(data: IStorageData[]): IStorageData[] {
    const params = new URLSearchParams(window.location.search);

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
      // const paramsObj = Object.fromEntries(Array.from(params.entries()).map(([key, value]) => [key, value]));
      // arrPrams.forEach((val) => {
      //   const [key, value] = val;
      //   Object.assign(params, { [key]: value });
      // });
      // console.log(paramsObj);

      const paramsArr = Array.from(params.entries());
      paramsArr.forEach(([key, value]) => {
        let validValues = value.split('↕');
        validValues = validValues.map((val) => decodeURI(val));
        if (key === 'brand') {
          data = data.filter((val) => validValues.includes(val.brand));
        } else if (key === 'category') {
          data = data.filter((val) => validValues.includes(val.category));
        } else if (key === 'stock') {
          data = data.filter((val) => val.stock >= parseInt(validValues[0]) && val.stock <= parseInt(validValues[1]));
        } else if (key === 'price') {
          data = data.filter((val) => val.price >= parseInt(validValues[0]) && val.price <= parseInt(validValues[1]));
        } else if (key === 'search') {
          data = data.filter((val) => {
            const valArr = Object.entries(val);
            for ([key, value] of valArr) {
              if (key !== 'id' && key !== 'images' && key !== 'thumbnail') {
                if (typeof value === 'string' || typeof value === 'number') {
                  const strValue = value.toString().toLowerCase();
                  const validSearch = validValues[0].toLowerCase();
                  if (strValue.indexOf(validSearch) !== -1) {
                    return true;
                  }
                }
              }
            }
          });
        }
      });
    }
    return data;
  }
}
