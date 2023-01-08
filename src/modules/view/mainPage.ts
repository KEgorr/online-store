import AddQueryParams from '../routers/routerFilter';
import { Filters } from './filters';
import { Items } from './items';
import * as data from '../data/store-items.json';
import { FiletsCategory, FiletsCategoryRange } from '../types/dataTypes';

export class MainPage {
  private items: Items;
  private filters: Filters;
  private routerFilter: AddQueryParams;

  constructor() {
    this.items = new Items();
    this.filters = new Filters();
    this.routerFilter = new AddQueryParams();
  }
  public drawMainPage() {
    const pageTemp: HTMLTemplateElement | null = document.querySelector('#mainPage');

    if (pageTemp) {
      const main = document.querySelector('.main .wrapper');
      if (main) {
        main.innerHTML = '';
        main.appendChild(pageTemp.content.cloneNode(true));
      }
    }
    this.items.drawItems(data.products);
    this.filters.drawFilters(data.products, FiletsCategory.Brand);
    this.filters.drawFilters(data.products, FiletsCategory.Category);
    this.filters.drawRangeFilters(data.products, FiletsCategoryRange.Price);
    this.filters.drawRangeFilters(data.products, FiletsCategoryRange.Stock);
    this.filters.filtersChangeState();
    this.routerFilter.add();

    document
      .querySelectorAll('input')
      .forEach((el) => el.addEventListener('input', () => this.items.drawItems(data.products)));
    document.querySelector('.reset-button')?.addEventListener('click', () => {
      this.items.drawItems(data.products);
      this.filters.filtersChangeState();
    });
  }
}
