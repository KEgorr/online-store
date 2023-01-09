import AddQueryParams from '../../routers/routerFilter';
import { Filters } from '../filters';
import { Items } from '../items';
import * as data from '../../data/store-items.json';
import { FiletsCategory, FiletsCategoryRange } from '../../types/dataTypes';
import { Cost } from '../cost';

export class MainPage {
  private items: Items;
  private filters: Filters;
  private routerFilter: AddQueryParams;
  private costChanging: Cost;

  constructor() {
    this.items = new Items();
    this.filters = new Filters();
    this.routerFilter = new AddQueryParams();
    this.costChanging = new Cost();
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
      .querySelector('.items-section')
      ?.addEventListener('click', (event) => this.costChanging.changeCostFromItemCard(event));

    document.querySelector('.sort-value')?.addEventListener('click', () => this.filters.openSortOptions());
    document
      .querySelectorAll('input')
      .forEach((el) => el.addEventListener('input', () => this.items.drawItems(data.products)));
    document.querySelector('.reset-button')?.addEventListener('click', () => {
      this.items.drawItems(data.products);
      this.filters.filtersChangeState();
    });
  }
}
