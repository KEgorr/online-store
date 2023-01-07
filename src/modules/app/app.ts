import * as data from '../data/store-items.json';
import { Items } from '../view/items';
import { Filters } from '../view/filters';
import { FiletsCategory, FiletsCategoryRange } from '../types/dataTypes';
import AddQueryParams from '../routers/routerFilter';
import { PageRouter } from '../routers/vanillaRouter';

export class App {
  private items: Items;
  private filters: Filters;
  private routerFilter: AddQueryParams;
  private pageRouter: PageRouter;

  constructor() {
    this.items = new Items();
    this.filters = new Filters();
    this.routerFilter = new AddQueryParams();
    this.pageRouter = new PageRouter({
      mode: 'history',
      page404: () => console.log('page 404'),
    });
  }

  public start() {
    // this.filters.drawFilters(data.products, FiletsCategory.Brand);
    // this.filters.drawFilters(data.products, FiletsCategory.Category);
    // this.filters.drawRangeFilters(data.products, FiletsCategoryRange.Price);
    // this.filters.drawRangeFilters(data.products, FiletsCategoryRange.Stock);
    // this.routerFilter.add();

    this.pageRouter.routerSetup(data.products);

    this.pageRouter.setupPageHooks();

    // document
    //   .querySelectorAll('input')
    //   .forEach((el) => el.addEventListener('input', () => this.items.drawItems(data.products)));
    // document.querySelector('.reset-button')?.addEventListener('click', () => {
    //   this.items.drawItems(data.products);
    //   this.filters.filtersChangeState();
    // });

    window.addEventListener('popstate', () => {
      // this.items.drawItems(data.products);
      // this.filters.filtersChangeState();
      this.pageRouter.check();
    });

    window.addEventListener('DOMContentLoaded', () => {
      // this.items.drawItems(data.products);
      // this.filters.filtersChangeState();
      this.pageRouter.check();
    });
  }
}

export default App;
