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
      rangeFilterFirst.addEventListener('change', sliderFirstChangeState);

      rangeFilterSecondValue.textContent = `${maxValue}`;
      rangeFilterSecond.min = `${minValue}`;
      rangeFilterSecond.max = `${maxValue}`;
      rangeFilterSecond.value = `${maxValue}`;
      rangeFilterSecond.addEventListener('input', sliderSecondChangeState);
      rangeFilterSecond.addEventListener('change', sliderSecondChangeState);

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

  filtersChangeState() {
    const params = new URLSearchParams(window.location.search);

    const paramsArr = Array.from(params.entries());
    const checkBoxes = document.querySelectorAll('.checkbox');
    if (checkBoxes) {
      checkBoxes.forEach((el) => {
        if (el instanceof HTMLInputElement) {
          el.checked = false;
        }
      });
    }

    const searchInput = document.querySelector('.search');
    if (searchInput instanceof HTMLInputElement) {
      searchInput.value = '';
    }

    paramsArr.forEach(([key, val]) => {
      let validValues = val.split('↕');
      validValues = validValues.map((val) => decodeURI(val));
      if (key === 'search') {
        if (searchInput instanceof HTMLInputElement) {
          searchInput.value = validValues[0];
        }
      } else if (key === 'brand' || key === 'category') {
        checkBoxes.forEach((el) => {
          if (el instanceof HTMLInputElement) {
            if (validValues.includes(el.value)) {
              el.checked = true;
            }
          }
        });
      } else if (key === 'stock') {
        const stockSlider1 = document.querySelector('#slider-stock1');
        const stockSlider2 = document.querySelector('#slider-stock2');
        if (stockSlider1 instanceof HTMLInputElement && stockSlider2 instanceof HTMLInputElement) {
          stockSlider1.value = validValues[0];
          stockSlider2.value = validValues[1];
          const event = new Event('change');
          stockSlider1.dispatchEvent(event);
          stockSlider2.dispatchEvent(event);
        }
      } else if (key === 'price') {
        const priceSlider1 = document.querySelector('#slider-price1');
        const priceSlider2 = document.querySelector('#slider-price2');
        if (priceSlider1 instanceof HTMLInputElement && priceSlider2 instanceof HTMLInputElement) {
          priceSlider1.value = validValues[0];
          priceSlider2.value = validValues[1];
          const event = new Event('change');
          priceSlider1.dispatchEvent(event);
          priceSlider2.dispatchEvent(event);
        }
      }
    });
  }
}
