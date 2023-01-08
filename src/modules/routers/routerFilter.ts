import LocalStorage from '../localStorage/localStorage';

export class AddQueryParams {
  paramsQuery: object;

  constructor() {
    this.paramsQuery = {};
  }

  private createQueryParams(params: { [key: string]: string[] }): string {
    return Object.keys(params)
      .map((key) => params[key].map((val) => encodeURI(val)).join('↕'))
      .join('');
  }

  private createQueryParamsKey(params: { [key: string]: string[] }): string {
    return Object.keys(params)
      .map((key) => `${key}`)
      .join('&');
  }

  private setAttribute(name: string, val: string) {
    const url = new URL((window.location as unknown) as string);
    url.searchParams.set(name, val);
    if (url.searchParams.get(name) === '') {
      url.searchParams.delete(name);
    }
    history.pushState('', '', url.toString());
  }

  public add() {
    const localStorage = new LocalStorage();
    let paramsBrandValue: string[] = [];
    let paramsCategoryValue: string[] = [];

    const checkboxes: NodeList | null = document.querySelectorAll('.checkbox');
    const search: HTMLInputElement | null = document.querySelector('.search');

    if (checkboxes) {
      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('input', (event) => {
          const params = new URLSearchParams(window.location.search);

          const paramsCurBrand = params.get('brand')?.split('↕');
          const paramsCurCategory = params.get('category')?.split('↕');

          if (paramsCurBrand) {
            paramsBrandValue = paramsCurBrand.map((val) => decodeURI(val));
          }
          if (paramsCurCategory) {
            paramsCategoryValue = paramsCurCategory.map((val) => decodeURI(val));
          }
          const targetCheckbox = event.currentTarget as HTMLInputElement;
          const paramsQuery: { [key: string]: string[] } = {};
          const target = event.target as HTMLInputElement;
          const targetName: string = target.name;
          const targetValue: string = target.value;
          if (targetCheckbox.checked) {
            if (target.name === 'brand') {
              paramsBrandValue.push(targetValue);
              paramsQuery[targetName] = paramsBrandValue;
              localStorage.set(target.name, JSON.stringify(paramsBrandValue));
            } else {
              paramsCategoryValue.push(targetValue);
              paramsQuery[targetName] = paramsCategoryValue;
              localStorage.set(target.name, JSON.stringify(paramsCategoryValue));
            }
          } else {
            if (target.name === 'brand') {
              paramsBrandValue = paramsBrandValue.filter((item) => item !== targetValue);
              paramsQuery[targetName] = paramsBrandValue;
            } else {
              paramsCategoryValue = paramsCategoryValue.filter((item) => item !== targetValue);
              paramsQuery[targetName] = paramsCategoryValue;
            }
            if (paramsCategoryValue.length === 0) {
              localStorage.clear('category');
            }
            if (paramsBrandValue.length === 0) {
              localStorage.clear('brand');
            }
          }
          this.setAttribute(this.createQueryParamsKey(paramsQuery), this.createQueryParams(paramsQuery));
        });
      });
    }

    const stoke1: HTMLInputElement | null = document.querySelector(`#slider-stock1`);
    const stoke2: HTMLInputElement | null = document.querySelector(`#slider-stock2`);
    const price1: HTMLInputElement | null = document.querySelector(`#slider-price1`);
    const price2: HTMLInputElement | null = document.querySelector(`#slider-price2`);

    const sliders = [stoke1, stoke2, price1, price2];

    if (stoke1 && stoke2 && price1 && price2) {
      sliders.forEach((el) => {
        el?.addEventListener('input', (event) => {
          const paramsQuery: { [key: string]: string[] } = {};
          const target = event.target as HTMLInputElement;
          const stoke1Value: string = stoke1.value;
          const stoke2Value: string = stoke2.value;
          const arrStockValue = [stoke1Value, stoke2Value];
          const price1Value: string = price1.value;
          const price2Value: string = price2.value;
          const arrPriceValue = [price1Value, price2Value];

          if (target.type === 'range') {
            if (target.id.indexOf('slider-price') !== -1) {
              paramsQuery['price'] = arrPriceValue;
              localStorage.set('price', arrPriceValue.toString());
            } else {
              paramsQuery['stock'] = arrStockValue;
              localStorage.set('stock', arrStockValue.toString());
            }
          }
          this.setAttribute(this.createQueryParamsKey(paramsQuery), this.createQueryParams(paramsQuery));
        });
      });
    }

    if (search) {
      search.addEventListener('input', (event) => {
        const paramsQuery: { [key: string]: string[] } = {};
        const targetSearch = event.target as HTMLInputElement;
        const targetValueSearch: string = targetSearch.value;
        paramsQuery['search'] = [targetValueSearch];
        localStorage.set('search', targetValueSearch);
        if (targetValueSearch.length === 0) {
          localStorage.clear('search');
        }
        this.setAttribute('search', this.createQueryParams(paramsQuery));
      });
      search.textContent = localStorage.get('search');
    }

    const buttonDefault: HTMLDivElement | null = document.querySelector('.reset-button');

    if (buttonDefault) {
      buttonDefault.onclick = function () {
        const url = new URL(window.location.origin);
        history.pushState('', '', url.toString());
        localStorage.clearAll();
      };
    }

    const buttonCopy: HTMLDivElement | null = document.querySelector('.copy-button');

    if (buttonCopy) {
      buttonCopy.onclick = function () {
        const copyUrl = document.createElement('input');
        copyUrl.value = window.location.href;
        document.body.appendChild(copyUrl);
        copyUrl.select();
        document.execCommand('copy');
        document.body.removeChild(copyUrl);
      };
    }
  }
}

export default AddQueryParams;
