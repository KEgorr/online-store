import * as data from '../data/store-items.json';
import { Items } from '../view/items';
import { Filters } from '../view/filters';
import { FiletsCategory, FiletsCategoryRange } from '../types/dataTypes';
import AddQueryParams from '../routers/routerFilter';

export class App {
  private items: Items;
  private filters: Filters;
  private routerFilter: AddQueryParams;

  constructor() {
    this.items = new Items();
    this.filters = new Filters();
    this.routerFilter = new AddQueryParams();
  }

  public start() {
    this.items.drawItems(data.products);
    this.filters.drawFilters(data.products, FiletsCategory.Brand);
    this.filters.drawFilters(data.products, FiletsCategory.Category);
    this.filters.drawRangeFilters(data.products, FiletsCategoryRange.Price);
    this.filters.drawRangeFilters(data.products, FiletsCategoryRange.Stock);
    this.routerFilter.add();

    document
      .querySelectorAll('input')
      .forEach((el) => el.addEventListener('input', () => this.items.drawItems(data.products)));
    document.querySelector('.reset-button')?.addEventListener('click', () => {
      this.start();
    });

    window.addEventListener('popstate', () => {
      this.items.drawItems(data.products);
      this.filters.filtersChangeState();
    });

    window.addEventListener('DOMContentLoaded', () => {
      this.items.drawItems(data.products);
      this.filters.filtersChangeState();
    });
  }
}

export default App;
