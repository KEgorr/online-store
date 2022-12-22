import LocalStorage from '../localStorage/localStorage';

export class AddQueryParams {
  paramsQuery: object;

  constructor() {
    this.paramsQuery = {};
  }

  private createQueryParams(params: { [key: string]: string[] }): string {
    return Object.keys(params)
        .map(key => `${encodeURI(params[key] as unknown as string)}`)
        .join('&');
  }

  private setAttribute(name: string, val: string) {
    const url = new URL(window.location as unknown as string);
    url.searchParams.set(name, val);
    history.pushState('', '', url.toString().replace(/%(?:2C|60|5E|2520|27|26)/g, unescape));
  }

  public add() {
    const localStorage = new LocalStorage();
    const paramsBrandValue: string[] = [];
    const paramsCategoryValue: string[] = [];

    addEventListener("input", event => {
      const paramsQuery: { [key: string]: string[] } = {};
      const target = event.target as HTMLInputElement;
      const targetName: string = target.name;
      const targetValue: string = target.value;

      if(target.type === 'checkbox') {
        if(target.name === 'brand') {
          paramsBrandValue.push(targetValue);
          paramsQuery[targetName] = paramsBrandValue;
          localStorage.set(target.name, JSON.stringify(paramsBrandValue));
        } else {
          paramsCategoryValue.push(targetValue);
          paramsQuery[targetName] = paramsCategoryValue;
          localStorage.set(target.name, JSON.stringify(paramsCategoryValue));
        }
      }

      if(target.type === 'range') {
        if(target.id === 'slider-price1') {
          paramsQuery['price'] = [targetValue];
          localStorage.set('price', targetValue);
        } else {
          paramsQuery['stock'] = [targetValue];
          localStorage.set('stock', targetValue);
        }
      }

      this.setAttribute(target.name, this.createQueryParams(paramsQuery));
    });
  }
}

export default AddQueryParams;