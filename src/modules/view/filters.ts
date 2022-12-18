import { IStorageData, FiletsCategory, FiletsCategoryRange } from '../types/dataTypes';

export class Filters {
  drawFilters(data: IStorageData[], filterCategory: FiletsCategory): void {
    const fragment = document.createDocumentFragment();
    const filterTemp: HTMLTemplateElement | null = document.querySelector('#filterValueTemp');
    const categoryValueArr: string[] = [];

    if (filterTemp) {
      data.forEach((item: IStorageData) => {
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

  drawRangeFilters(data: IStorageData[], filterName: FiletsCategoryRange): void {
    const rangeFilterFirst: HTMLInputElement | null = document.querySelector(`#slider-${filterName}1`);
    const rangeFilterSecond: HTMLInputElement | null = document.querySelector(`#slider-${filterName}2`);

    const rangeFilterFirstValue: HTMLSpanElement | null = document.querySelector(`#${filterName}-value1`);
    const rangeFilterSecondValue: HTMLSpanElement | null = document.querySelector(`#${filterName}-value2`);

    const rangeFilter: HTMLDivElement | null = document.querySelector(`#slider-track-${filterName}`);
    const valueArr = data.map((val) => val[filterName]);

    const maxValue = Math.max(...valueArr);
    const minValue = Math.min(...valueArr);

    const minGap = 0;

    if (rangeFilterFirstValue && rangeFilterSecondValue && rangeFilterFirst && rangeFilterSecond) {
      rangeFilterFirstValue.textContent = `${minValue}`;
      rangeFilterFirst.min = `${minValue}`;
      rangeFilterFirst.max = `${maxValue}`;
      rangeFilterFirst.value = `${minValue}`;
      rangeFilterFirst.addEventListener('input', sliderFirstChangeState);

      rangeFilterSecondValue.textContent = `${maxValue}`;
      rangeFilterSecond.min = `${minValue}`;
      rangeFilterSecond.max = `${maxValue}`;
      rangeFilterSecond.value = `${maxValue}`;
      rangeFilterSecond.addEventListener('input', sliderSecondChangeState);

      fillColor();
    }

    function sliderFirstChangeState() {
      if (rangeFilterFirstValue && rangeFilterFirst && rangeFilterSecond) {
        if (parseInt(rangeFilterSecond.value) - parseInt(rangeFilterFirst.value) <= minGap) {
          rangeFilterFirst.value = `${parseInt(rangeFilterSecond.value) - minGap}`;
        }
        rangeFilterFirstValue.textContent = rangeFilterFirst.value;

        fillColor();
      }
    }
    function sliderSecondChangeState() {
      if (rangeFilterSecondValue && rangeFilterFirst && rangeFilterSecond) {
        if (parseInt(rangeFilterSecond.value) - parseInt(rangeFilterFirst.value) <= minGap) {
          rangeFilterSecond.value = `${parseInt(rangeFilterFirst.value) + minGap}`;
        }
        rangeFilterSecondValue.textContent = rangeFilterSecond.value;

        fillColor();
      }
    }
    function fillColor() {
      if (rangeFilterFirst && rangeFilterSecond && rangeFilter) {
        const percentFirstSlider = (parseInt(rangeFilterFirst.value) / maxValue) * 100;
        const percentSecondSlider = (parseInt(rangeFilterSecond.value) / maxValue) * 100;

        rangeFilter.style.background = `linear-gradient(to right, #dadae5 ${percentFirstSlider}% , #3264fe ${percentFirstSlider}% , #3264fe ${percentSecondSlider}%, #dadae5 ${percentSecondSlider}%)`;
      }
    }
  }
}
