import { itemsData, FiletsCategory } from '../types/dataTypes';

export class Filters {
  drawFilters(data: itemsData[], filterCategory: FiletsCategory): void {
    const fragment = document.createDocumentFragment();
    const filterTemp: HTMLTemplateElement | null = document.querySelector('#filterValueTemp');
    const categoryValueArr: string[] = [];

    if (filterTemp) {
      data.forEach((item: itemsData) => {
        const filterClone = filterTemp.content.cloneNode(true);

        if (filterClone instanceof DocumentFragment) {
          const filerCheckBox: HTMLInputElement | null = filterClone.querySelector('.checkbox');
          const filerValue: HTMLParagraphElement | null = filterClone.querySelector('.filter_value');

          if (filerCheckBox && filerValue) {
            if (!categoryValueArr.includes(item[filterCategory])) {
              filerValue.textContent = item[filterCategory];
              filerCheckBox.name = filterCategory;
              filerCheckBox.value = item[filterCategory];
              fragment.append(filterClone);
              categoryValueArr.push(item[filterCategory]);
            }
          }
        }
      });
    }
    const filtersBlock = document.querySelector(`.${filterCategory}`);

    if (filtersBlock) {
      filtersBlock.innerHTML = '';
      filtersBlock.appendChild(fragment);
    }
  }
}
