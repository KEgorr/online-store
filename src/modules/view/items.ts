import { app } from '../..';
import { IStorageData } from '../types/dataTypes';

export class Items {
  drawItems(data: IStorageData[]): void {
    const items = this.filterItems(data);

    const fragment = document.createDocumentFragment();
    const itemTemp: HTMLTemplateElement | null = document.querySelector('#itemTemp');
    const productsTemp: HTMLTemplateElement | null = document.querySelector('#productsInCart');

    if (itemTemp && productsTemp) {
      if (items.length === 0) {
        const noItemsText = document.createElement('p');
        noItemsText.textContent = 'No Items found 😥';
        noItemsText.classList.add('no-items-text');
        fragment.append(noItemsText);
      } else {
        items.forEach((item: IStorageData) => {
          const itemClone = itemTemp.content.cloneNode(true);
          const productsClone = productsTemp.content.cloneNode(true);

          if (itemClone instanceof DocumentFragment && productsClone instanceof DocumentFragment) {
            const itemName: HTMLParagraphElement | null = itemClone.querySelector('.item__name');
            const itemImg: HTMLSpanElement | null = itemClone.querySelector('.item__img');
            const itemDiscount: HTMLSpanElement | null = itemClone.querySelector('.item__discount');
            const itemCharStock: HTMLSpanElement | null = itemClone.querySelector('.characteristics__stock');
            const itemCharBrand: HTMLSpanElement | null = itemClone.querySelector('.characteristics__brand');
            const itemCharCategory: HTMLSpanElement | null = itemClone.querySelector('.characteristics__category');
            const itemCharRating: HTMLSpanElement | null = itemClone.querySelector('.characteristics__rating');
            const curPrice: HTMLParagraphElement | null = itemClone.querySelector('.price__current-price');
            const origPrice: HTMLSpanElement | null = itemClone.querySelector('.price__original-price');
            const addToCartButtonBlock = itemClone.querySelector('.add-to-cart-button');
            const addToCartDefaultButton = itemClone.querySelector('.add-to-cart-button .button-stock-increase');

            if (
              itemName &&
              itemImg &&
              itemDiscount &&
              itemCharStock &&
              itemCharBrand &&
              itemCharCategory &&
              itemCharRating &&
              curPrice &&
              origPrice &&
              addToCartButtonBlock &&
              addToCartDefaultButton
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
              addToCartDefaultButton.id = `${item.id}`;

              const localData = app.localStorage.get('items');
              let localItems: IStorageData[] = [];
              if (localData) {
                localItems = JSON.parse(localData) as IStorageData[];
              }

              const localItem = localItems.find((el) => el.id === item.id);
              if (localItem) {
                itemClone.querySelector('.item')?.classList.add('item-in-cart');
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
        } else if (key === 'sort') {
          const sortingOptions = validValues[0].split('-');
          const sortName = sortingOptions[0];
          const sortCategory = sortingOptions[1];
          if (sortName === 'price' || sortName === 'discountPercentage' || sortName === 'rating') {
            if (sortCategory === 'asc') {
              data = data.sort((a, b) => a[sortName] - b[sortName]);
            } else if (sortCategory === 'desc') {
              data = data.sort((a, b) => b[sortName] - a[sortName]);
            }
          }
        }
      });
    }
    return data;
  }
}
